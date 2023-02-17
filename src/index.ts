import {
  createConnectTransport,
  createPromiseClient,
  Interceptor,
  Transport,
} from '@bufbuild/connect-web';
import type { ServiceType } from '@bufbuild/protobuf';
import type { CreateFileResponse } from './file/v1/file_pb';

export async function uploadFile(
  parentId: string,
  name: string,
  apiKey: string,
  file?: File
) {
  const url = 'https://mcp.operand.ai/upload';
  const formData = new FormData();
  if (file) {
    formData.append('file', file);
  }
  formData.append('parent_id', parentId);
  formData.append('name', name);
  // Multipart form data
  const response = await fetch(url, {
    headers: {
      Authorization: 'Key ' + apiKey,
    },
    method: 'POST',
    body: formData,
  });
  const json = (await response.json()) as CreateFileResponse;
  return json;
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

export const developInProd = true;

export async function operandClient<T extends ServiceType>(
  service: T,
  apiKey: string,
  extraHeaders?: { [key: string]: string | null }
) {
  const baseUrl = 'https://mcp.operand.ai';

  var transport: Transport;

  transport = createConnectTransport({
    baseUrl,
    interceptors: [
      createHeaderInterceptor({
        ...extraHeaders,
        Authorization: 'Key ' + apiKey,
      }),
    ],
    jsonOptions: {
      ignoreUnknownFields: true,
    },
  });

  return createPromiseClient(service, transport);
}

export * from './file/v1/file_pb';
export * from './file/v1/file_connectweb';

export * from './operand/v1/operand_pb';
export * from './operand/v1/operand_connectweb';

export * from './tenant/v1/tenant_pb';
export * from './tenant/v1/tenant_connectweb';
