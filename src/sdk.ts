import {
  Collection,
  Group,
  Source,
  GroupMetadata,
  SearchResponse,
} from './types';
import axios from 'axios';

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
    let url = `${this.endpoint}/collection/${collectionId}`;
    let response = await axios.get(url, {
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as Collection;
  }

  // List collections
  async listCollections(
    limit?: number,
    offset?: number
  ): Promise<{
    collections: Collection[];
    more: boolean;
  }> {
    let url = `${this.endpoint}/collection`;
    let response = await axios.get(url, {
      params: {
        limit: limit,
        offset: offset,
      },
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as { collections: Collection[]; more: boolean };
  }

  // Create a collection
  async createCollection(source: Source): Promise<Collection> {
    let url = `${this.endpoint}/collection`;
    let response = await axios.post(
      url,
      { source: source.source, metadata: source.metadata },
      {
        headers: {
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return response.data as Collection;
  }

  // Delete a collection
  async deleteCollection(collectionId: string): Promise<{ deleted: boolean }> {
    let url = `${this.endpoint}/collection/${collectionId}`;
    let response = await axios.delete(url, {
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as { deleted: boolean };
  }

  // GROUPS

  // Get a group by id
  async getGroup(groupId: string): Promise<Group> {
    let url = `${this.endpoint}/group/${groupId}`;
    let response = await axios.get(url, {
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as Group;
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
    let url = `${this.endpoint}/group`;
    let response = await axios.get(url, {
      params: {
        limit: limit,
        offset: offset,
        collection: collection,
      },
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as { groups: Group[]; more: boolean };
  }

  // Create a group
  async createGroup(
    collectionId: string,
    metadata: GroupMetadata
  ): Promise<Group> {
    let url = `${this.endpoint}/group`;
    let response = await axios.post(
      url,
      { collectionId, ...metadata },
      {
        headers: {
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return response.data as Group;
  }

  // Delete a group
  async deleteGroup(groupId: string): Promise<{ deleted: boolean }> {
    let url = `${this.endpoint}/group/${groupId}`;
    let response = await axios.delete(url, {
      headers: {
        Authorization: `${this.apiKey}`,
      },
    });
    return response.data as { deleted: boolean };
  }

  // Search
  async search(
    collections: string[],
    query: string,
    limit?: number
  ): Promise<SearchResponse> {
    let url = `${this.endpoint}/search`;
    let response = await axios.post(
      url,
      {
        collections,
        query,
        limit,
      },
      {
        headers: {
          Authorization: `${this.apiKey}`,
        },
      }
    );
    return response.data as SearchResponse;
  }
}
