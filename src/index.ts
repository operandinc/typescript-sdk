import {
  createConnectTransport,
  createPromiseClient,
  Interceptor,
  PromiseClient,
} from '@bufbuild/connect-web';
import { ServiceType } from '@bufbuild/protobuf';

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
  apiKey: string
): PromiseClient<T> {
  const transport = createConnectTransport({
    baseUrl: 'https://engine.operand.ai',
    interceptors: [createHeaderInterceptor({ Authorization: apiKey })],
  });
  return createPromiseClient(service, transport);
}

export * from './index/v1/index_connectweb';
export * from './index/v1/index_pb';
