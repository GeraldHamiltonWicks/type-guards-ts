# Type Guards TS

`type-guards-ts` is a TypeScript library providing a collection of type guard functions to help you perform runtime type checking and type narrowing. This library includes functions to check if a value is of a certain type (e.g., `isBoolean`) as well as functions to check if a value is not of a certain type (e.g., `isNotBoolean`).

## Index

- [Installation](#installation)
- [How to Use](#how-to-use)
- [Available Type Guards](#available-type-guards)
- [How to Use Each Type Guard](#how-to-use-each-type-guard)
    - [isBigInt](#isbigint)
    - [isBoolean](#isboolean)
    - [isFunction](#isfunction)
    - [isNull](#isnull)
    - [isNumber](#isnumber)
    - [isObject](#isobject)
    - [isString](#isstring)
    - [isSymbol](#issymbol)
    - [isUndefined](#isundefined)
    - [isArray](#isArray)
    - [isNotBigInt](#isnotbigint)
    - [isNotBoolean](#isnotboolean)
    - [isNotFunction](#isnotfunction)
    - [isNotNull](#isnotnull)
    - [isNotNumber](#isnotnumber)
    - [isNotObject](#isnotobject)
    - [isNotString](#isnotstring)
    - [isNotSymbol](#isnotsymbol)
    - [isNotUndefined](#isnotundefined)
    - [isNotArray](#isnotarray)
- [Future Releases](#future-releases)

## Installation

To install the package, run the following command:

```bash
npm install type-guards-ts
```

## How to Use

To use the type guards provided by `type-guards-ts`, you can import the required functions from the package and use them in your TypeScript code. Here’s a quick example:

```typescript
import { isBoolean } from "type-guards-ts";

const value: unknown = true;

if (isBoolean(value)) {
    // TypeScript now knows that `value` is a boolean
    console.log("The value is a boolean.");
} else {
    console.log("The value is not a boolean.");
}
```

## Available Type Guards

- `isBigInt`
- `isBoolean`
- `isFunction`
- `isNull`
- `isNumber`
- `isObject`
- `isString`
- `isSymbol`
- `isUndefined`
- `isArray`
- `isNotBigInt`
- `isNotBoolean`
- `isNotFunction`
- `isNotNull`
- `isNotNumber`
- `isNotObject`
- `isNotString`
- `isNotSymbol`
- `isNotUndefined`
- `isNotArray`

## How to Use Each Type Guard

### isBigInt

Checks if a value is a `BigInt`.

```typescript
import { isBigInt } from "type-guards-ts";

const value: unknown = BigInt(123);

if (isBigInt(value)) {
    console.log("The value is a BigInt.");
} else {
    console.log("The value is not a BigInt.");
}
```

### isBoolean

Checks if a value is a `boolean`.

```typescript
import { isBoolean } from "type-guards-ts";

const value: unknown = true;

if (isBoolean(value)) {
    console.log("The value is a boolean.");
} else {
    console.log("The value is not a boolean.");
}
```

### isFunction

Checks if a value is a `function`.

```typescript
import { isFunction } from "type-guards-ts";

const value: unknown = () => {};

if (isFunction(value)) {
    console.log("The value is a function.");
} else {
    console.log("The value is not a function.");
}
```

### isNull

Checks if a value is `null`.

```typescript
import { isNull } from "type-guards-ts";

const value: unknown = null;

if (isNull(value)) {
    console.log("The value is null.");
} else {
    console.log("The value is not null.");
}
```

### isNumber

Checks if a value is a `number`.

```typescript
import { isNumber } from "type-guards-ts";

const value: unknown = 42;

if (isNumber(value)) {
    console.log("The value is a number.");
} else {
    console.log("The value is not a number.");
}
```

### isObject

Checks if a value is an `object`.

```typescript
import { isObject } from "type-guards-ts";

const value: unknown = { key: "value" };

if (isObject(value)) {
    console.log("The value is an object.");
} else {
    console.log("The value is not an object.");
}
```

### isString

Checks if a value is a `string`.

```typescript
import { isString } from "type-guards-ts";

const value: unknown = "Hello, world!";

if (isString(value)) {
    console.log("The value is a string.");
} else {
    console.log("The value is not a string.");
}
```

### isSymbol

Checks if a value is a `symbol`.

```typescript
import { isSymbol } from "type-guards-ts";

const value: unknown = Symbol("symbol");

if (isSymbol(value)) {
    console.log("The value is a symbol.");
} else {
    console.log("The value is not a symbol.");
}
```

### isUndefined

Checks if a value is `undefined`.

```typescript
import { isUndefined } from "type-guards-ts";

const value: unknown = undefined;

if (isUndefined(value)) {
    console.log("The value is undefined.");
} else {
    console.log("The value is not undefined.");
}
```

### isArray

Checks if a value is an `array`.

```typescript
import { isArray } from "type-guards-ts";

const value: unknown = [];

if (isArray(value)) {
    console.log("The value is an array.");
} else {
    console.log("The value is not array.");
}
```

### isNotBigInt

Checks if a value is not a `BigInt`.

```typescript
import { isNotBigInt } from "type-guards-ts";

const value: unknown = 123;

if (isNotBigInt(value)) {
    console.log("The value is not a BigInt.");
} else {
    console.log("The value is unknown.");
}
```

### isNotBoolean

Checks if a value is not a `boolean`.

```typescript
import { isNotBoolean } from "type-guards-ts";

const value: unknown = "true";

if (isNotBoolean(value)) {
    console.log("The value is not a boolean.");
} else {
    console.log("The value is unknown.");
}
```

### isNotFunction

Checks if a value is not a `function`.

```typescript
import { isNotFunction } from "type-guards-ts";

const value: unknown = "function";

if (isNotFunction(value)) {
    console.log("The value is not a function.");
} else {
    console.log("The value is unknown.");
}
```

### isNotNull

Checks if a value is not `null`.

```typescript
import { isNotNull } from "type-guards-ts";

const value: unknown = "not null";

if (isNotNull(value)) {
    console.log("The value is not null.");
} else {
    console.log("The value is unknown.");
}
```

### isNotNumber

Checks if a value is not a `number`.

```typescript
import { isNotNumber } from "type-guards-ts";

const value: unknown = "42";

if (isNotNumber(value)) {
    console.log("The value is not a number.");
} else {
    console.log("The value is unknown.");
}
```

### isNotObject

Checks if a value is not an `object`.

```typescript
import { isNotObject } from "type-guards-ts";

const value: unknown = "object";

if (isNotObject(value)) {
    console.log("The value is not an object.");
} else {
    console.log("The value is unknown.");
}
```

### isNotString

Checks if a value is not a `string`.

```typescript
import { isNotString } from "type-guards-ts";

const value: unknown = 123;

if (isNotString(value)) {
    console.log("The value is not a string.");
} else {
    console.log("The value is unknown.");
}
```

### isNotSymbol

Checks if a value is not a `symbol`.

```typescript
import { isNotSymbol } from "type-guards-ts";

const value: unknown = "symbol";

if (isNotSymbol(value)) {
    console.log("The value is not a symbol.");
} else {
    console.log("The value is unknown.");
}
```

### isNotUndefined

Checks if a value is not `undefined`.

```typescript
import { isNotUndefined } from "type-guards-ts";

const value: unknown = "defined";

if (isNotUndefined(value)) {
    console.log("The value is not undefined.");
} else {
    console.log("The value is unknown.");
}
```

### isNotArray

Checks if a value is not an `array`.

```typescript
import { isNotArray } from "type-guards-ts";

const value: unknown = "not array";

if (isNotArray(value)) {
    console.log("The value is not an array.");
} else {
    console.log("The value is not unknown.");
}
```


## Future Releases

Currently, this package focuses on type guards for primitive types. However, we're actively working on expanding the library to include type guards for non-primitive types. Stay tuned for future releases where you'll find new and enhanced functionalities!

Keep your code safe and type-safe with `type-guards-ts`! 🚀