---
sidebar_position: 1
---
# DB CMP Browser SDK

> Deutsche Bahn consent management platform browser SDK

The goal of this SDK is to offer access to the underlying consent management platform (CMP) in the browser.
By using a CMP, we ensure that websites use the same standardized way of managing consent, which is aligned with Konzerndatenschutz (privacy officer) according to legal requirements.
The current CMP in use is [Usercentrics](https://usercentrics.com/de/website-consent-management/).

## How it works

The CMP and this SDK will be embedded into a website via a tag manager (Tealium).
This makes the integration of Tealium mandatory.

Ideally, loading the CMP via a script tag handles most of the cases, i.e. where external DPS are integrated with script tags as well (see Case 1 below).
For other cases, e.g. custom implementations, there might be the need to interact with the CMP directly via this SDK (see Case 2).

### Case 1: Integration of DPS via script tags

A website integrates a DPS via script tags (`<script>...</script>`).

Loading of scripts can be fully managed by Tealium using the Usercentrics extension.
The script tags need to be added to Tealium and mapped to a DPS (created in Usercentrics).
Tealium will then automatically add or remove the script from the website based on the current consent status.

### Case 2: Integration of DPS without using script tags

A website integrates a DPS via a manual or customized solution, e.g. using an `npm` library.

Developers need to use the CMP SDK and query the consent for the given DPS before exposing (user)data.
For example when using an analytics library, before firing events it should be checked if there is valid consent.

## Prerequisites

### Gather services you need consent for

Find and/or add the data processing services (DPS) consent is needed for in the CMP. The CMP usually offers the most common DPS out of the box.
If you use a custom DPS, it has to be added to the CMP first.
These services will then appear in the consent layer, so users can manage their privacy settings (opt-in).

Likewise, these services can then be managed by the SDK/CMP (loading scripts, listening to consent events, etc.).

### Tealium tag manager

[Tealium](https://tealium.com/products/tealium-iq-tag-management-system/) is used as tag manager to ship scripts (i.e. "tags") to a website.
By doing this, we can deliver the consent layer, as well as offer access to the underlying CMP (via this SDK) with only one additional script tag.

You'll need the correct account and profile information before you start integrating Tealium and the CMP.

## Install

### Add Tealium script tag to your website

> see: https://docs.tealium.com/platforms/javascript/install/

Adding the following snippet to a website will load Tealium and initialize its datalayer, the `utag_data` object (UDO):

<!-- prettier-ignore-start -->
```html
<body>
  <!-- Tealium universal data object -->
  <script type="text/javascript">
    var utag_data = {};
  </script>

  <!-- Tealium tag -->
  <script type="text/javascript">
      (function(a,b,c,d){
          a='https://tags.tiqcdn.com/utag/ACCOUNT/PROFILE/STAGE/utag.js';
          b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
          a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
      })();
  </script>
</body>
```
<!-- prettier-ignore-end -->

**Note:**

- `ACCOUNT` is the Tealium account used
- `PROFILE` is the currently used Tealium profile, i.e. the profile used to manage your website
- `STAGE` is the current stage being used: `prod`, `qa` or `dev`
  - ⚠️ **be careful to select the proper stage for your deployment target**
  - `dev` can include experimental features and should only be used for development
  - `qa` is meant as staging environment for testing
  - `prod` is considered stable and should be used for production

### Configuration

It is possible to configure some consent layer behaviour before loading the CMP, e.g. suppressing the UI on certain pages or disabling the auto-reload after consent changes.
The configuration uses Tealium's data layer, the `utag_data` object (UDO).

To use the configuration, add the [options](docs/api/interfaces/cmpoptions.md) to your existing `utag_data` object.
Example:

```html
<script type="text/javascript">
  var utag_data = {
    cmp_privacy_url: '/imprint',
    // see list of options
  };
</script>
```

### Migrating existing tags

After adding the tag manager, existing scripts need to be migrated.
Instead of adding them directly to the website, they will be loaded via Tealium:

- add Tealium tag
- remove old tag(s)
- add (and configure) tag(s) to Tealium
- map tag(s) to a data processing service in the CMP
- tag manager will then manage tags based on user consent

> ⚠️ As tags are loaded dynamically based on consent, you have to make sure your code still works without these external scripts, e.g. before accessing global variables added by them.
>
> By default, the page will reload after a consent change (= removal/addition of a script tag) to make sure the page is in a "fresh" state.

Depending on how script tags get loaded and configured, simply replacing the tags might not be enough.
Ideally, the external script simply gets loaded by Tealium while being configured on the website (after making sure the script was properly loaded and executed).
For most other cases, there are predefined tags available, which can be configured in the tag manager directly.

There are some examples of services being migrated to Tealium and CMP in the [docs](docs) folder.

## API

The main purpose of this SDK is to allow programmatic interaction with the underlying CMP, which means that the basic functionality of the UI will be available through this API.
It is _not_ meant to circumvent or replace the usage of the UI.

A documentation of the Typescript API can be found here: [docs/api](docs/api/README.md).

### Usage

#### As global Window variable

The SDK is bundled with the Tealium tag, so it can be used once the tag manager is properly loaded.
All methods are available from within the `DB_CMP` namespace in the browser:

```javascript
// Browser console

DB_CMP.isInitialized();
DB_CMP.getServices();

// In code

if (typeof window !== 'undefined') {
  // browser only
  const { DB_CMP } = window;
  if (DB_CMP) {
    // ...
  }
}
```

#### As package

> ⚠️ Currently, the package is only available via private GitHub registry. We plan to make it public soon.

Alternatively you can install the package and use the SDK directly, for example using `yarn`:

```
yarn add @bahn-x/cmp-sdk
```

```javascript
import { init, getServices } from '@bahn-x/cmp-sdk';

init().then(() => {
  // use the SDK, e.g.:
  const services = getServices();
});
```

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

### Possible pitfalls

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
