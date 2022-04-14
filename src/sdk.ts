import {
  Collection,
  Group,
  Source,
  GroupMetadata,
  SearchResponse,
  RelatedResponse,
} from './types';

const baseUrl = 'https://core.operand.ai';

export class Operand {
  private apiKey: string;
  public endpoint: string;

  constructor(apiKey: string, endpoint?: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint || baseUrl;
  }

  // COLLECTIONS

  // Get a collection by id
  async getCollection(collectionId: string): Promise<Collection> {
    const response = await fetch(
      `${this.endpoint}/collection/${collectionId}`,
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

  // List collections
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
      `${this.endpoint}/collection?offset=${offset}&limit=${limit}`,
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

  // Create a collection
  async createCollection(source: Source): Promise<Collection> {
    const response = await fetch(`${this.endpoint}/collection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify(source),
    });
    return (await response.json()) as Collection;
  }

  // Delete a collection
  async deleteCollection(collectionId: string): Promise<{ deleted: boolean }> {
    const response = await fetch(
      `${this.endpoint}/collection/${collectionId}`,
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

  // GROUPS

  // Get a group by id
  async getGroup(groupId: string): Promise<Group> {
    const response = await fetch(`${this.endpoint}/group/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as Group;
  }

  // List groups
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
    let url = `${this.endpoint}/group?offset=${offset}&limit=${limit}`;
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

  // Create a group
  async createGroup(
    collectionId: string,
    metadata: GroupMetadata
  ): Promise<Group> {
    const response = await fetch(`${this.endpoint}/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        collectionId,
        ...metadata,
      }),
    });
    return (await response.json()) as Group;
  }

  // Update a group
  async updateGroup(groupId: string, metadata: GroupMetadata): Promise<Group> {
    const response = await fetch(`${this.endpoint}/group/${groupId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        ...metadata,
      }),
    });
    return (await response.json()) as Group;
  }

  // Delete a group
  async deleteGroup(groupId: string): Promise<{ deleted: boolean }> {
    const response = await fetch(`${this.endpoint}/group/${groupId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
    });
    return (await response.json()) as { deleted: boolean };
  }

  // Search
  async search(
    collections: string[],
    query: string,
    limit?: number
  ): Promise<SearchResponse> {
    if (!limit) {
      limit = 12;
    }
    const response = await fetch(`${this.endpoint}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        collections,
        query,
        limit,
      }),
    });
    return (await response.json()) as SearchResponse;
  }

  // Find related groups.
  async related(
    groupId: string,
    collections: string[],
    limit?: number
  ): Promise<RelatedResponse> {
    if (!limit) {
      limit = 5;
    }
    const response = await fetch(`${this.endpoint}/related`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.apiKey}`,
      },
      body: JSON.stringify({
        groupId,
        collections,
        limit,
      }),
    });
    return (await response.json()) as RelatedResponse;
  }
}
