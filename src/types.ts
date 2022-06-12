/* Type Definitions */

export interface Object {
  id: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
  // Type of the object determine the type of the metadata
  type: ObjectType;
  // Metadata of the object derived from the type
  metadata:
    | CollectionObjectMetadata
    | TextObjectMetadata
    | HtmlObjectMetadata
    | MarkdownObjectMetadata;
  // Properties of the object
  properties: ObjectProperties;
  // Indexing Status of the object
  indexingStatus: IndexingStatus;
}

// Type of the object determine the type of the metadata
export type ObjectType = 'collection' | 'text' | 'html' | 'markdown';

export type CollectionObjectMetadata = {};

export type TextObjectMetadata = {
  text: string;
};

export type HtmlObjectMetadata = {
  html: string;
  title?: string;
};

export type MarkdownObjectMetadata = {
  markdown: string;
  title?: string;
};

export type ObjectProperties = {
  [key: string]: any;
};

export type IndexingStatus = 'indexed' | 'ready';

// Object Endpoints Types
export type GetObjectRequest = {
  objectId: string;
};

export type ListObjectsRequest = {
  parentId?: string;
  limit?: number;
  startingAfter?: string;
  endingBefore?: string;
};

export type ListObjectsResponse = {
  objects: Object[];
  hasMore: boolean;
};

export type CreateObjectRequest = {
  parentId?: string;
  type: ObjectType;
  metadata:
    | CollectionObjectMetadata
    | TextObjectMetadata
    | HtmlObjectMetadata
    | MarkdownObjectMetadata;
  properties?: ObjectProperties;
};

export type DeleteObjectRequest = {
  objectId: string;
};

export type DeleteObjectResponse = {
  deleted: boolean;
};

// Operation Endpoints Types

export type Snippet = {
  objectId: string;
  content: string;
  type: 'title' | 'content' | 'link' | 'image' | 'code' | 'list_item';
};

export type SearchVariantContentsRequest = {
  query: string;
  parentIds?: string[];
  max?: number;
  filter?: Filter;
};

export type SearchVariantContentsResponse = {
  id: string;
  latencyMs: number;
  contents: Snippet[];
  objects: {
    [objectId: string]: Object;
  };
};

export type Filter = {
  [key: string]: any;
};
