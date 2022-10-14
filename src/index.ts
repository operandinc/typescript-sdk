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

export function operandClient<T extends ServiceType>(
  service: T,
  apiKey: string,
  endpoint?: string
): PromiseClient<T> {
  const baseUrl = endpoint || 'https://engine.operand.ai';
  const transport = hasFetchApi()
    ? createConnectTransport({
        baseUrl: baseUrl,
        interceptors: [createHeaderInterceptor({ Authorization: apiKey })],
      })
    : createNodeFetchTransport(baseUrl, apiKey);
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

function createNodeFetchTransport(baseUrl: string, apiKey: string): Transport {
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
          'Content-Type': 'application/json',
          Authorization: apiKey,
        },
        body: createRequestBody(
          message instanceof method.I ? message : new method.I(message)
        ),
      });
      if (!response.ok) {
        return Promise.reject(new Error(response.statusText));
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

export * from './index/v1/index_connectweb.js';
export * from './index/v1/index_pb.js';
export type { PartialMessage } from '@bufbuild/protobuf'; // Re-export for convenience.
