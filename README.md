# Operand SDK

The official Typescript SDK for the [Operand](https://operand.ai) API. If this is your first time using Operand, we recommend going through the [Getting Started Guide(https://docs.operand.ai/start) as well as [signing up for an account](https://operand.ai/auth).

## Installation / Usage

To install the SDK, simply install the relevant NPM package:

```bash
npm install @operandinc/sdk
```

Then, you can initialize the SDK with the following code:

```typescript
import { OperandV3 } from "@operandinc/sdk";

const operand = new OperandV3(
  "<your api key>",
  "https://prod.operand.ai",
);

...
```

## Getting Support

Have any questions / feedback? [Click here](https://docs.operand.ai/start#getting-help).
