# ts-keyof

Use variable name as a string over key in object. Little alternative
to [ts-nameof](https://github.com/dsherret/ts-nameof) with zero-configs,
but works in runtime!

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
import { keyof } from 'ts-keyof';

const someVariable = 'value';

keyof({ someVariable }) === 'someVariable'; // Mission completion!
```

### Simple Refactoring

```jsx
const MyReactComponent = () => {}; // You need only to rename variable

MyReactComponent.displayName = keyof({ MyReactComponent });

// You don't need to think about strings
// MyReactComponent.displayName = 'MyReactComponent';
```

### Types and Errors

```ts
const one = 1;
const two = 2;

const result = keyof({ one, two }); // result is `unknown` for TypeScript

result === undefined; // It's true in runtime

// You cannot use type `unknown` by accident. TypeScript checks it.
parseInt(result); // parseInt works only with strings.
// TypeScript emits error here: "Argument of type 'unknown' is not assignable
// to parameter of type 'string'. ts(2345)". It's good!
// We don't use type `never` or `any` which you can use by accident.
```

About `unknown`, `never` and `any`:
[github/typescript-website/type-compatibility](https://github.com/microsoft/TypeScript-Website/blob/c79c1dd3084aedc2b32ace71dca086b3e2cac5ba/packages/documentation/copy/en/reference/Type%20Compatibility.md#any-unknown-object-void-undefined-null-and-never-assignability)
