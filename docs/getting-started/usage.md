---
sidebar_position: 3
id: usage
---

# Usage

The main purpose of the bundled SDK is to allow programmatic access to some core functions of the UI by offering our own "wrapper".
It is _not_ meant to circumvent or replace the usage of the UI itself.

:::info
A complete documentation of the Typescript API can be found here: [docs/api](../api/README.md).
:::

## As global Window variable

The SDK is bundled with the Tealium tag, so it can be used once the tag manager is properly loaded.
All methods are available from within the `DB_CMP` namespace:

**In the browser console**
```javascript
DB_CMP.isInitialized();
DB_CMP.getServices();
```

**In your code**
```javascript
if (typeof window !== 'undefined') {
  // browser only
  const { DB_CMP } = window;
  if (DB_CMP) {
    // ...
  }
}
```

## As package

:::note
Currently, the package is only available via private GitHub registry. We plan to make it public soon.
:::

Alternatively you can install the package and use the SDK directly, for example using `yarn`:

```shell
yarn add @bahn-x/cmp-sdk
```

```javascript
import { init, getServices } from '@bahn-x/cmp-sdk';

init().then(() => {
  // use the SDK, e.g.:
  const services = getServices();
});
```

### Typescript

The package also includes type definitions, so you can extend the global `Window` object and use the SDK in your code:

```typescript
// for example globals.d.ts
import { CmpBrowserObject } from '@bahn-x/cmp-sdk';

declare global {
  interface Window {
    /**
     * NOTE: Due to the way the SDK gets loaded, this variable can be undefined,
     * e.g. if external script tags are blocked by the browser.
     */
    DB_CMP?: CmpBrowserObject;
  }
}

// somewhere-else.ts
const { DB_CMP } = window;
DB_CMP?.getServices();
```

## Possible pitfalls

Due to the way the CMP gets loaded and initialized, there can be race conditions and/or problems accessing the SDK depending on when and how you access it:

- accessing the SDK before the CMP is completely loaded (e.g. due to a slow internet connection)
- script tags not being loaded at all (e.g. ad blocker blocking the tag manager)

To avoid that, there are a couple approaches:

```javascript
// When accessing the global window variable,
// check availability of the script before doing anything with it:
const { DB_CMP } = window;
if (DB_CMP) {
  // access the SDK
}

// check readiness of the SDK (doesn't counter race conditions)
if (DB_CMP.isInitialized()) {
  // the SDK is initialized and available
}

// wait for proper initialization by using the `init()` method
DB_CMP.init().then(() => {
  // the SDK is initialized and available
});

// use the custom event to wait for readiness
window.addEventListener('DB_CMP_INITIALIZED', () => {
  // the SDK is initialized and available
});
```