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
    | MarkdownObjectMetadata
    | PDFObjectMetadata
    | ImageObjectMetadata
    | GitHubRepositoryObjectMeta
    | EpubObjectMetadata;
  // Properties of the object
  properties: ObjectProperties;
  // Indexing Status of the object
  indexingStatus: IndexingStatus;
  // Label of the object, optional.
  label?: string;
}

// Type of the object determine the type of the metadata
export type ObjectType =
  | 'collection'
  | 'text'
  | 'html'
  | 'markdown'
  | 'pdf'
  | 'image'
  | 'github_repository'
  | 'epub';

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

export type PDFObjectMetadata = {
  pdfUrl: string;
};

export type ImageObjectMetadata = {
  imageUrl: string;
};

export type GitHubRepositoryObjectMeta = {
  accessToken: string;
  repoOwner: string;
  repoName: string;
  rootPath?: string;
  rootURL?: string;
};

export type EpubObjectMetadata = {
  epubUrl: string;
  title?: string;
  language?: string;
};

export type ObjectProperties = {
  [key: string]: any;
};

export type IndexingStatus = 'indexing' | 'ready';

// Object Endpoints Types
export type GetObjectRequest = {
  id: string;
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
    | MarkdownObjectMetadata
    | PDFObjectMetadata
    | ImageObjectMetadata
    | GitHubRepositoryObjectMeta;
  properties?: ObjectProperties;
  label?: string;
};

export type DeleteObjectRequest = {
  id: string;
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

export type SearchVariantRelatedRequest = {
  parentIds?: string[];
  objectId: string;
  max?: number;
  filter?: Filter;
};

export type SearchVariantRelatedResponse = {
  id: string;
  latencyMs: number;
  objects: Object[];
};

export type CompletionVariantAnswerRequest = {
  parentIds?: string[];
  question: string;
  filter?: Filter;
};

export type CompletionVariantAnswerResponse = {
  id: string;
  latencyMs: number;
  answer: string;
  sources: Object[];
};

export type CompletionVariantTypeAheadRequest = {
  parentIds?: string[];
  text: string;
  count?: number;
  filter: Filter;
};

export type CompletionVariantTypeAheadResponse = {
  id: string;
  latencyMs: number;
  completions: string[];
  sources: Object[];
};

export type Filter = {
  [key: string]: any;
};
