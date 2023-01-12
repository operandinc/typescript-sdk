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
import fetch from 'cross-fetch';

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

export const indexIDHeaderKey = 'Operand-Index-ID';

export function operandClient<T extends ServiceType>(
  service: T,
  apiKey: string,
  endpoint?: string,
  extraHeaders?: { [key: string]: string | null },
  forceFetchTransport?: boolean
): PromiseClient<T> {
  const baseUrl = endpoint || 'https://engine.operand.ai';
  const headers = {
    ...extraHeaders,
    Authorization: apiKey,
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

export * as V3Connect from './index/v1/index_connectweb.js';
export * as V3Types from './index/v1/index_pb.js';
export * from './operand/v1/object_connectweb.js';
export * from './operand/v1/object_pb.js';
export * from './operand/v1/operand_connectweb.js';
export * from './operand/v1/operand_pb.js';
export * from './operand/v1/notification_connectweb.js';
export * from './operand/v1/notification_pb.js';
export * from './operand/v1/index_connectweb.js';
export * from './operand/v1/index_pb.js';
export type { PartialMessage } from '@bufbuild/protobuf'; // Re-export for convenience.
