import { Collection, Group, SearchResponse, AskResponse } from './types';

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

  async createCollection(source: string, metadata: any): Promise<Collection> {
    const response = await fetch(`${this.endpoint}/v2/collection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        source,
        metadata,
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

  async getGroup(groupId: string): Promise<Group> {
    const response = await fetch(`${this.endpoint}/v2/group/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as Group;
  }

  async listGroups(
    collection?: string,
    limit?: number,
    offset?: number
  ): Promise<{
    groups: Group[];
    more: boolean;
  }> {
    if (!limit) {
      limit = 100;
    }
    if (!offset) {
      offset = 0;
    }
    let url = `${this.endpoint}/v2/group?offset=${offset}&limit=${limit}`;
    if (collection) {
      url += `&collection=${collection}`;
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

  async createGroup(
    collectionId: string,
    kind: string,
    metadata: any,
    properties: any
  ): Promise<Group> {
    const response = await fetch(`${this.endpoint}/v2/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        collectionId,
        kind,
        metadata,
        properties,
      }),
    });
    return (await response.json()) as Group;
  }

  async updateGroup(
    groupId: string,
    kind: string,
    metadata: any,
    properties: any
  ): Promise<Group> {
    const response = await fetch(`${this.endpoint}/v2/group/${groupId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        kind,
        metadata,
        properties,
      }),
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
    collections: string[];
    query: string;
    limit?: number;
    filter: any;
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
    limit?: number;
    filter: any;
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
}
