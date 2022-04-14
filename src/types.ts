// A single collection
export type Collection = {
  id: string;
  createdAt: number;
  updatedAt: number;
  source: string;
  metadata: any;
  status: Status;
};

export type Status = 'indexing' | 'ready';

export type Group = {
  id: string;
  collectionId: string;
  createdAt: number;
  kind: string;
  metadata: any;
};

export type Atom = {
  id: string;
  groupId: string;
  createdAt: number;
  content: string;
  kind: AtomKind;
};

export type AtomKind = 'title' | 'content' | 'link' | 'image' | 'code';

export type ScoredAtom = Atom & {
  score: number;
};

export type SearchResponse = {
  latencyMs: number;
  atoms: ScoredAtom[];
  groups?: {
    [groupId: string]: Group;
  };
};

export type RelatedResponse = {
  latencyMs: number;
  groups: (Group & {
    score: number;
  })[];
};

export type GroupMetadata =
  | {
      kind: 'notion_page';
      metadata: {
        pageId: string;
        url: string;
        title?: string;
      };
    }
  | {
      kind: 'rss_item';
      metadata: {
        title?: string;
        description?: string;
        link: string;
      };
    }
  | {
      kind: 'html';
      metadata: {
        html: string;
        title?: string;
      };
    };

export type Source = (
  | {
      source: 'notion';
      metadata: {
        accessToken: string;
      };
    }
  | {
      source: 'rss';
      metadata: {
        url: string;
      };
    }
  | {
      source: 'none';
      metadata: {};
    }
) & {
  embeddingSource?: string;
};
