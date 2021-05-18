[@bahn-x/cmp-sdk](../README.md) / CmpOptions

# Interface: CmpOptions

DB CMP SDK options.

Options to configure the consent layer UI behaviour.
Have to be placed in an existing `utag_data` object.

Note: To avoid naming conflicts with other `utag_data` properties,
all options are prefixed with `cmp_`.

**`example`** 
```typescript
const options: CmpOptions = { cmp_disable_reload: true }
window.utag_data = { ...options };
```

## Table of contents

### Properties

- [cmp\_disable\_reload](cmpoptions.md#cmp_disable_reload)
- [cmp\_imprint\_url](cmpoptions.md#cmp_imprint_url)
- [cmp\_legal\_pages](cmpoptions.md#cmp_legal_pages)
- [cmp\_privacy\_url](cmpoptions.md#cmp_privacy_url)

## Properties

### cmp\_disable\_reload

• `Optional` **cmp\_disable\_reload**: *boolean*

Disables the page reload after a consent change event happened.
Note: If you disable reload, you have to make sure queued events that affect user data are stopped if consent has been revoked.

**`default`** `undefined` (Page reloads on consent changes, except for the very first user interaction.)

___

### cmp\_imprint\_url

• `Optional` **cmp\_imprint\_url**: *string*

Link to the imprint page. Absolute or relative URL.

**`example`** `https://hompeage.com/imprint`

**`default`** `undefined` (Set in CMP admin panel.)

___

### cmp\_legal\_pages

• `Optional` **cmp\_legal\_pages**: *string*[]

List of paths to legal pages which have to be accessible without showing the consent layer.

**`example`** `['/impressum', '/datenschutz']`

**`default`** `undefined`

___

### cmp\_privacy\_url

• `Optional` **cmp\_privacy\_url**: *string*

Link to the privacy statement. Absolute or relative URL.

**`example`** `https://hompeage.com/privacy`

**`default`** `undefined` (Set in CMP admin panel.)
