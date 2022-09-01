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
  SearchVariantRelatedResponse,
  SearchVariantObjectsRequest,
  SearchVariantObjectsResponse,
  CreateTriggerRequest,
  Trigger,
  ListTriggersRequest,
  ListTriggersResponse,
  GetTriggerRequest,
  DeleteTriggerRequest,
  DeleteTriggerResponse,
  FeedbackRequest,
  UpdateObjectRequest,
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
    if (req.includeObjectCount && req.includeObjectCount === true) {
      endpoint += '?count=true';
    }
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
      url += `&parentId=${req.parentId}`;
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

  async updateObject(id: string, req: UpdateObjectRequest): Promise<Object> {
    const response = await fetch(`${this.endpoint}/v3/objects/${id}`, {
      method: 'PUT',
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

  async searchObjects(
    req: SearchVariantObjectsRequest
  ): Promise<SearchVariantObjectsResponse> {
    const response = await fetch(`${this.endpoint}/v3/search/objects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as SearchVariantObjectsResponse;
  }

  async searchRelated(
    req: SearchVariantRelatedRequest
  ): Promise<SearchVariantRelatedResponse> {
    const response = await fetch(`${this.endpoint}/v3/search/related`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as SearchVariantRelatedResponse;
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

  async createTrigger(req: CreateTriggerRequest): Promise<Trigger> {
    const response = await fetch(`${this.endpoint}/v3/triggers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as Trigger;
  }

  async listTriggers(req: ListTriggersRequest): Promise<ListTriggersResponse> {
    let url = `${this.endpoint}/v3/triggers`;
    if (req.limit) {
      url += `?limit=${req.limit}`;
    } else {
      url += '?limit=100';
    }
    if (req.offset) {
      url += `&offset=${req.offset}`;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as ListTriggersResponse;
  }

  async getTrigger(req: GetTriggerRequest): Promise<Trigger> {
    const response = await fetch(`${this.endpoint}/v3/triggers/${req.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as Trigger;
  }

  async deleteTrigger(
    req: DeleteTriggerRequest
  ): Promise<DeleteTriggerResponse> {
    const response = await fetch(`${this.endpoint}/v3/triggers/${req.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as DeleteTriggerResponse;
  }

  async feedback(req: FeedbackRequest): Promise<{}> {
    const response = await fetch(`${this.endpoint}/v3/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as {};
  }
}
