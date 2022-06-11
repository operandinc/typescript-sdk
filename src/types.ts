/* Type Definitions */

export type ObjectProperties = {
  [key: string]: any;
};

export type Object = {
  id: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
  properties: ObjectProperties;
  indexingStatus: 'indexed' | 'ready';
} & (
  | {
      type: 'collection';
      metadata: {};
    }
  | {
      type: 'text';
      metadata: {
        text: string;
      };
    }
  | {
      kind: 'html';
      metadata: {
        html: string;
        title?: string; // If not provided, will attempt to deduce.
      };
    }
  | {
      kind: 'markdown';
      metadata: {
        markdown: string;
        title?: string; // If not provided, will attempt to deduce.
      };
    }
);

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
  properties?: ObjectProperties;
} & (
  | {
      type: 'collection';
      metadata: {};
    }
  | {
      type: 'text';
      metadata: {
        text: string;
      };
    }
  | {
      kind: 'html';
      metadata: {
        html: string;
        title?: string; // If not provided, will attempt to deduce.
      };
    }
  | {
      kind: 'markdown';
      metadata: {
        markdown: string;
        title?: string; // If not provided, will attempt to deduce.
      };
    }
);

export type DeleteObjectRequest = {
  objectId: string;
};

export type DeleteObjectResponse = {
  deleted: boolean;
};

// Operation Endpoints Types

export type Atom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  objectId: string;
  content: string;
  type: 'title' | 'content' | 'link' | 'image' | 'code' | 'list_item';
};

export type SearchVariantContentsRequest = {
  query: string;
  parents?: string[];
  max?: number;
  filter?: Filter;
};

export type SearchVariantContentsResponse = {
  id: string;
  latencyMs: number;
  contents: Atom[];
  objects: Map<string, Object>;
};

export type Filter = {
  [key: string]: any;
};
