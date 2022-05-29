/* Type Definitions */

export type Collection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  embeddingSource: string;
  indexingStatus: 'indexing' | 'ready';
  source: string;
  metadata: any;
};

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  indexingStatus: 'indexing' | 'ready';
  parentId?: string;
  collectionId?: string;
  properties: any; // Near-arbritrary.
  related?: Group[]; // Only used if ?related=N is passed to getGroup.
} & (
  | {
      kind: 'collection';
      metadata: {};
    }
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
  | {
      kind: 'notion_page';
      metadata: {
        pageId: string;
        url: string;
        title?: string;
      };
    }
  | {
      kind: 'epub';
      metadata: {
        epubUrl: string;
        title?: string;
        language?: string;
      };
    }
  | {
      kind: 'notion';
      metadata: {
        accessToken: string;
      };
    }
  | {
      kind: 'github_repository';
      metadata: {
        accessToken: string;
        repoOwner: string;
        repoName: string;
        rootPath: string;
      };
    }
  | {
      kind: 'pdf';
      metadata: {
        pdfUrl: string;
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
  id: string;
  latencyMs: number;
  atoms: (Atom & {
    score: number;
  })[];
  groups: {
    [groupId: string]: Group;
  };
};

export type AskResponse = {
  id: string;
  latencyMs: number;
  answer: string;
  confidence: number;
  sources: Group[];
};

export type CompletionResponse = {
  latencyMs: number;
  completions: string[];
  sources: Group[];
};
