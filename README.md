# ts-keyof

## Installation

### For Yarn

```sh
yarn add ts-keyof
```

### For NPM

```
npm install ts-keyof
```

## Features

### Get variable name as string

```js
import { keyof } from "ts-keyof";

const someVariable = "value";

keyof({ someVariable }) === "someVariable"; // 'someVariable'
```

### Simple Refactoring

```jsx
const MyReactComponent = () => {}; // You need only rename variable

MyReactComponent.displayName = keyof({ MyReactComponent });

// You don't need to think about strings
// MyReactComponent.displayName = "MyReactComponent"
```

### Types and Errors

```ts
const one = 1;
const two = 2;

const result = keyof({ one, two }); // result is "unknown" for TypeScript

result === undefined; // in runtime is true

// You cannot use type "unknown" by accident. TypeScript checks it.
parseInt(result); // TypeScript emits error here! It's good!
// We don't use type "never" which you can use by accident.
```

About "unknown" and "never": https://github.com/microsoft/TypeScript-Website/blob/c79c1dd3084aedc2b32ace71dca086b3e2cac5ba/packages/documentation/copy/en/reference/Type%20Compatibility.md#any-unknown-object-void-undefined-null-and-never-assignability
