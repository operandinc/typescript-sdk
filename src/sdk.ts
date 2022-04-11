import {
  Collection,
  Group,
  Source,
  GroupMetadata,
  SearchResponse,
} from './types';
import axios, { AxiosInstance } from 'axios';

const baseUrl = 'https://core.operand.ai';

export class Operand {
  private requester: AxiosInstance;

  constructor(apiKey: string, endpoint?: string) {
    let instance = axios.create({ baseURL: endpoint || baseUrl });
    instance.interceptors.request.use(config => {
      config.headers = {
        Authorization: `${apiKey}`,
        ...config.headers,
      };
      return config;
    });

    this.requester = instance;
  }

  // COLLECTIONS

  // Get a collection by id
  async getCollection(collectionId: string): Promise<Collection> {
    let response = await this.requester.get(`/collection/${collectionId}`);
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
    let response = await this.requester.get('/collection', {
      params: {
        limit: limit,
        offset: offset,
      },
    });
    return response.data as { collections: Collection[]; more: boolean };
  }

  // Create a collection
  async createCollection(source: Source): Promise<Collection> {
    let response = await this.requester.post('/collection', {
      source: source.source,
      metadata: source.metadata,
    });
    return response.data as Collection;
  }

  // Delete a collection
  async deleteCollection(collectionId: string): Promise<{ deleted: boolean }> {
    let response = await this.requester.delete(`/collection/${collectionId}`);
    return response.data as { deleted: boolean };
  }

  // GROUPS

  // Get a group by id
  async getGroup(groupId: string): Promise<Group> {
    let response = await this.requester.get(`/group/${groupId}`);
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
    let response = await this.requester.get('/group', {
      params: {
        limit: limit,
        offset: offset,
        collection: collection,
      },
    });
    return response.data as { groups: Group[]; more: boolean };
  }

  // Create a group
  async createGroup(
    collectionId: string,
    metadata: GroupMetadata
  ): Promise<Group> {
    let response = await this.requester.post('/group', {
      collectionId,
      ...metadata,
    });
    return response.data as Group;
  }

  // Delete a group
  async deleteGroup(groupId: string): Promise<{ deleted: boolean }> {
    let response = await this.requester.delete(`/group/${groupId}`);
    return response.data as { deleted: boolean };
  }

  // Search
  async search(
    collections: string[],
    query: string,
    limit?: number
  ): Promise<SearchResponse> {
    let response = await this.requester.post('/search', {
      collections,
      query,
      limit,
    });
    return response.data as SearchResponse;
  }
}
