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

function createHeaderInterceptor(headers: {
  [key: string]: string | null;
}): Interceptor {
  return next => async req => {
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
        body: JSON.stringify(message),
      });
      if (!response.ok) {
        return Promise.reject(new Error(response.statusText));
      }
      return <UnaryResponse<O>>{
        message: method.O.fromJson((await response.json()) as JsonValue),
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

// If the above jank code doesn't work, we can try getting this to work:
// declare type NodeJSClient<T extends ServiceType> = {
//   [P in keyof T['methods']]: T['methods'][P] extends MethodInfoUnary<
//     infer I,
//     infer O
//   >
//     ? (request: PartialMessage<I>) => Promise<O>
//     : never;
// };

// type AnyClient = Record<string, AnyClientMethod>;

// declare type AnyClientMethod = (...args: any[]) => any;

// function makeAnyClient(
//   service: ServiceType,
//   createMethod: (method: MethodInfo) => AnyClientMethod | null
// ): AnyClient {
//   const client: AnyClient = {};
//   for (const [localName, methodInfo] of Object.entries(service.methods)) {
//     const method = createMethod(methodInfo);
//     if (method != null) {
//       client[localName] = method;
//     }
//   }
//   return client;
// }

// function makeUnaryFunc(
//   endpoint: string,
//   method: MethodInfo,
//   apiKey: string
// ): AnyClientMethod {
//   return async (request: any) => {
//     let url = endpoint + '/' + method.name;
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: apiKey,
//       },
//       body: JSON.stringify(request),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//     }
//     return await response.json();
//   };
// }

// // This is a workaround for node-js clients that don't support connect-web.
// export function nodejsClient<T extends ServiceType>(
//   service: T,
//   apiKey: string,
//   endpoint?: string
// ): NodeJSClient<T> {
//   endpoint = endpoint || 'https://engine.operand.ai';
//   endpoint += '/' + service.typeName;

//   return makeAnyClient(service, method => {
//     if (method.kind === MethodKind.Unary) {
//       return makeUnaryFunc(endpoint!, method, apiKey);
//     }
//     return null;
//   }) as NodeJSClient<T>;
// }

export * from './index/v1/index_connectweb';
export * from './index/v1/index_pb';
