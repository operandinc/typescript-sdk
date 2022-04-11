# Operand SDK

The official Typescript SDK for the [Operand](https://operand.ai) API. This is a work in progress and is **not yet production-ready**. To get API keys, please [reach out](mailto:morgan@operand.ai).

## Installation

To install the SDK, simply install the relevant NPM package:

```bash
npm install @operand/sdk
```

## Concepts

The API structured hierarchically, with the following concepts:

- A **Collection** is a top-level group, and a search query can be performed against one or more collections at once.
- A **Group** is a sub-group within a collection, e.g., a single document.

For example, a multi-lingual Wikipedia may have a collection per language, each containing a set of groups (each corresponding to a single document within that Wikipedia). A user could then choose to search over the documents in a single language, or across many languages at once.

## Getting Started

In order to use the API, you'll first need an API key. To get this, please [contact us](mailto:morgan@operand.ai).

In `lib/operand.ts`:

```typescript
import { Operand } from '@operand/sdk';

const client = new Operand(process.env.OPERAND_API_KEY);

export default client;
```

Then, you can use the client to perform CRUD operations on Collection and Group objects:

```typescript
import Operand from 'lib/operand';

const englishWikipedia = await operand.createCollection({
  source: 'none',
  metadata: {},
});

const transformersMovie = await operand.createGroup({
  collectionId: englishWikipedia.id,
  kind: 'html',
  metadata: {
    html: '<p>Big robots punching each other. Lots of lens flares.</p>',
    title: 'Transformers (Movie Series)',
  },
});
```

Searching becomes easy:

```typescript
const results = await operand.search([englishWikipedia.id], 'cool movies', 12);
console.log(results);
```

## Getting Support

This is a work in progress, please don't hesitate to [reach out](mailto:morgan@operand.ai) with any questions or feedback items (or simply file an issue)!
