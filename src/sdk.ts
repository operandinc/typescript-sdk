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
  SearchVariantRelatedRequest,
  CompletionVariantAnswerRequest,
  CompletionVariantAnswerResponse,
  CompletionVariantTypeAheadResponse,
  CompletionVariantTypeAheadRequest,
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
    let endpoint = `${this.endpoint}/v3/objects/${req.id}`;
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
    let url = `${this.endpoint}/v3/objects?limit=${req.limit}`;
    if (req.parentId) {
      url += `&parent=${req.parentId}`;
    }
    if (req.startingAfter) {
      url += `&startingAfter=${req.startingAfter}`;
    }
    if (req.endingBefore) {
      url += `&endingBefore=${req.endingBefore}`;
    }
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
    const response = await fetch(`${this.endpoint}/v3/objects/${req.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
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

  async searchRelated(
    req: SearchVariantRelatedRequest
  ): Promise<SearchVariantContentsResponse> {
    const response = await fetch(`${this.endpoint}/v3/search/related`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as SearchVariantContentsResponse;
  }

  async completionAnswer(
    req: CompletionVariantAnswerRequest
  ): Promise<CompletionVariantAnswerResponse> {
    const response = await fetch(`${this.endpoint}/v3/completion/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as CompletionVariantAnswerResponse;
  }

  async completionTypeAhead(
    req: CompletionVariantTypeAheadRequest
  ): Promise<CompletionVariantTypeAheadResponse> {
    const response = await fetch(`${this.endpoint}/v3/completion/typeahead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as CompletionVariantTypeAheadResponse;
  }
}
