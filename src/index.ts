import {
  createConnectTransport,
  createPromiseClient,
  Interceptor,
  PromiseClient,
  StreamResponse,
  Transport,
  UnaryResponse,
} from '@bufbuild/connect-web';
import type {
  AnyMessage,
  JsonValue,
  Message,
  MethodInfo,
  PartialMessage,
  ServiceType,
} from '@bufbuild/protobuf';
import 'isomorphic-fetch';
import type { Properties } from './file/v1/file_pb';

// A utility function to upload a file.
export async function uploadFile(
  apiKey: string,
  name: string,
  parentId: string, // If "", then the file is uploaded to the root directory.
  file?: ArrayBuffer,
  properties?: Properties,
) {
  const data = new FormData();
  data.append("name", name);
  data.append("parent_id", parentId);
  if (properties) {
    data.append("properties", properties.toJsonString());
  }
  if (file) {
    data.append("file", new Blob([file]));
  }
  const response = await fetch("https://mcp.operand.ai/upload", {
    method: "POST",
    headers: {
      Authorization: "Key " + apiKey,
    },
    body: data,
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text);
  }
  return JSON.parse(text);
}

function createHeaderInterceptor(headers: {
  [key: string]: string | null;
}): Interceptor {
  return (next) => async (req) => {
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        if (!req.header.has(key) && value) {
          req.header.set(key, value);
        }
      }
    }
    return await next(req);
  };
}

export function operandClient<T extends ServiceType>(
  service: T,
  apiKey: string,
  endpoint?: string,
  extraHeaders?: { [key: string]: string | null },
  forceFetchTransport?: boolean
): PromiseClient<T> {
  const baseUrl = endpoint || 'https://mcp.operand.ai';
  const headers = {
    ...extraHeaders,
    Authorization: `Key ${apiKey}`,
  };
  const transport =
    hasFetchApi() && !forceFetchTransport
      ? createConnectTransport({
          baseUrl: baseUrl,
          interceptors: [createHeaderInterceptor(headers)],
          jsonOptions: {
            ignoreUnknownFields: true,
          }
        })
      : createNodeFetchTransport(baseUrl, headers);
  return createPromiseClient(service, transport);
}

function hasFetchApi(): boolean {
  try {
    new Headers();
    return true;
  } catch (_) {
    return false;
  }
}

function createRequestBody<T extends Message<T>>(message: T): BodyInit {
  return message.toJsonString();
}

function createNodeFetchTransport(
  baseUrl: string,
  headers: { [key: string]: string | null }
): Transport {
  return {
    async unary<
      I extends Message<I> = AnyMessage,
      O extends Message<O> = AnyMessage
    >(
      service: ServiceType,
      method: MethodInfo<I, O>,
      _signal: AbortSignal | undefined,
      _timeoutMs: number | undefined,
      _header: HeadersInit | undefined,
      message: PartialMessage<I>
    ): Promise<UnaryResponse<O>> {
      const endpoint = `${baseUrl}/${service.typeName}/${method.name}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: createRequestBody(
          message instanceof method.I ? message : new method.I(message)
        ),
      });
      if (!response.ok) {
        const body = await response.text();
        const message = `Request failed with code ${response.status}, status ${response.statusText}: ${body}`;
        console.warn(message);
        return Promise.reject(new Error(message));
      }
      return <UnaryResponse<O>>{
        message: method.O.fromJson((await response.json()) as JsonValue, {
          ignoreUnknownFields: true,
        }),
      };
    },
    async serverStream<
      I extends Message<I> = AnyMessage,
      O extends Message<O> = AnyMessage
    >(
      _service: ServiceType,
      _method: MethodInfo<I, O>,
      _signal: AbortSignal | undefined,
      _timeoutMs: number | undefined,
      _header: HeadersInit | undefined,
      _message: PartialMessage<I>
    ): Promise<StreamResponse<O>> {
      return Promise.reject(new Error('Not implemented'));
    },
  };
}

export * from './file/v1/file_pb.js';
export * from './file/v1/file_connectweb.js';

export * from './operand/v1/operand_pb.js';
export * from './operand/v1/operand_connectweb.js';

export * from './tenant/v1/tenant_pb.js';
export * from './tenant/v1/tenant_connectweb.js';

export type { PartialMessage } from '@bufbuild/protobuf'; // Re-export for convenience.