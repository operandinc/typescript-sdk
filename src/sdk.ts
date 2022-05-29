import {
  Collection,
  Group,
  SearchResponse,
  AskResponse,
  CompletionResponse,
} from './types';
const fetch = require('node-fetch');

export class Operand {
  private apiKey: string;
  private endpoint: string;

  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  async getCollection(collectionId: string): Promise<Collection> {
    const response = await fetch(
      `${this.endpoint}/v2/collection/${collectionId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return (await response.json()) as Collection;
  }

  async listCollections(
    limit?: number,
    offset?: number
  ): Promise<{
    collections: Collection[];
    more: boolean;
  }> {
    if (!limit) {
      limit = 100;
    }
    if (!offset) {
      offset = 0;
    }
    const response = await fetch(
      `${this.endpoint}/v2/collection?offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return (await response.json()) as {
      collections: Collection[];
      more: boolean;
    };
  }

  async createCollection(): Promise<Collection> {
    const response = await fetch(`${this.endpoint}/v2/collection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        source: 'none',
        metadata: {},
      }),
    });
    return (await response.json()) as Collection;
  }

  async deleteCollection(collectionId: string): Promise<{ deleted: boolean }> {
    const response = await fetch(
      `${this.endpoint}/v2/collection/${collectionId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return (await response.json()) as { deleted: boolean };
  }

  async getGroup(req: { groupId: string; related?: number }): Promise<Group> {
    let endpoint = `${this.endpoint}/v2/group/${req.groupId}`;
    if (req.related) {
      endpoint += `?related=${req.related}`;
    }
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as Group;
  }

  async listGroups(req: {
    collection?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    groups: Group[];
    more: boolean;
  }> {
    if (!req.limit) {
      req.limit = 100;
    }
    if (!req.offset) {
      req.offset = 0;
    }
    let url = `${this.endpoint}/v2/group?offset=${req.offset}&limit=${req.limit}`;
    if (req.collection) {
      url += `&collectionId=${req.collection}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as { groups: Group[]; more: boolean };
  }

  async createGroup(req: {
    collectionId: string;
    kind: string;
    metadata: any;
    properties: any;
  }): Promise<Group> {
    const response = await fetch(`${this.endpoint}/v2/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as Group;
  }

  async updateGroup(
    groupId: string,
    req: {
      kind?: string;
      metadata?: any;
      properties?: any;
    }
  ): Promise<Group> {
    const response = await fetch(`${this.endpoint}/v2/group/${groupId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as Group;
  }

  async deleteGroup(groupId: string): Promise<{ deleted: boolean }> {
    const response = await fetch(`${this.endpoint}/v2/group/${groupId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as { deleted: boolean };
  }

  async search(req: {
    collections?: string[];
    query: string;
    limit?: number;
    filter?: any;
  }): Promise<SearchResponse> {
    const response = await fetch(`${this.endpoint}/v2/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as SearchResponse;
  }

  async ask(req: {
    collections: string[];
    query: string;
    filter: any;
    answerStyle?: 'paraphrase' | 'direct'; // If omitted, defaults to paraphrase.
  }): Promise<AskResponse> {
    const response = await fetch(`${this.endpoint}/v2/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as AskResponse;
  }

  async feedback(req: {
    search?: {
      id: string;
      clickedId: string;
    };
    ask?: {
      id: string;
      reaction: boolean;
    };
  }): Promise<{}> {
    const response = await fetch(`${this.endpoint}/v2/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as {};
  }

  async completion(req: {
    collections?: string[];
    text: string;
    count?: number;
    filter?: any;
  }): Promise<CompletionResponse> {
    const response = await fetch(`${this.endpoint}/v2/completion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(req),
    });
    return (await response.json()) as CompletionResponse;
  }
}
