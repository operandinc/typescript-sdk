/* Type Definitions */

export type Collection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  embeddingSource: string;
  indexingStatus: 'indexing' | 'ready';
} & (
  | {
      source: 'none';
      metadata: {};
    }
  | {
      source: 'epub';
      metadata: {
        epubUrl: string;
      };
    }
);

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  collectionId: string;
  properties: any; // Near-arbritrary.
  related?: Group[]; // Only used if ?related=N is passed to getGroup.
} & (
  | {
      kind: 'text';
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
  | {
      kind: 'email';
      metadata: {
        email: string;
        sent?: Date; // If not provided, will attempt to deduce.
        from?: string; // If not provided, will attempt to deduce.
        subject?: string; // If not provided, will attempt to deduce.
        to?: string[]; // If not provided, will attempt to deduce.
      };
    }
);

export type Atom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  groupId: string;
  content: string;
  kind: 'title' | 'content' | 'link' | 'image' | 'code';
};

export type SearchResponse = {
  latencyMs: number;
  atoms: (Atom & {
    score: number;
  })[];
  groups: {
    [groupId: string]: Group;
  };
};

export type AskResponse = {
  latencyMs: number;
  answer: string;
  confidence: number;
  sources: Group[];
};
