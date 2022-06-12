import {
  Object,
  GetObjectRequest,
  ListObjectsRequest,
  ListObjectsResponse,
  CreateObjectRequest,
  DeleteObjectRequest,
  DeleteObjectResponse,
  SearchVariantContentsRequest,
  SearchVariantContentsResponse,
} from './types';
const fetch = require('node-fetch');

export class OperandV3 {
  private apiKey: string;
  private endpoint: string;

  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  async getObject(req: GetObjectRequest): Promise<Object> {
    let endpoint = `${this.endpoint}/v3/objects/${req.objectId}`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as Object;
  }

  async listObjects(req: ListObjectsRequest): Promise<ListObjectsResponse> {
    if (!req.limit) {
      req.limit = 100;
    }
    let url = `${this.endpoint}/v3/objects/?limit=${req.limit}&parentId=${req.parentId}&startingAfter=${req.startingAfter}&endingBefore=${req.endingBefore}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as ListObjectsResponse;
  }

  async createObject(req: CreateObjectRequest): Promise<Object> {
    const response = await fetch(`${this.endpoint}/v3/objects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as Object;
  }

  async deleteObject(req: DeleteObjectRequest): Promise<DeleteObjectResponse> {
    const response = await fetch(
      `${this.endpoint}/v3/objects/${req.objectId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return (await response.json()) as DeleteObjectResponse;
  }

  async searchContents(
    req: SearchVariantContentsRequest
  ): Promise<SearchVariantContentsResponse> {
    const response = await fetch(`${this.endpoint}/v3/search/contents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as SearchVariantContentsResponse;
  }
}
