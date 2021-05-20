---
sidebar_position: 1
id: installation
---

# Installation

## Add Tealium script tag to your website

:::info
Find the official installation guide [here](https://docs.tealium.com/platforms/javascript/install/).
:::

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

:::note
- `ACCOUNT` is the Tealium account used
- `PROFILE` is the currently used Tealium profile, i.e. the profile used to manage your website
- `STAGE` is the current stage being used: `prod`, `qa` or `dev`
    - ⚠️ **be careful to select the proper stage for your deployment target**
    - `dev` can include experimental features and should only be used for development
    - `qa` is meant as staging environment for testing
    - `prod` is considered stable and should be used for production
:::

## Migrating existing tags

After adding the tag manager, existing scripts need to be migrated.
Instead of adding them directly to the website, they will be loaded via Tealium:

- add Tealium tag
- remove old tag(s)
- add (and configure) tag(s) to Tealium
- map tag(s) to a data processing service in the CMP
- tag manager will then manage tags based on user consent

:::caution
As tags are loaded dynamically based on consent, you have to make sure your code still works without these external scripts, e.g. before accessing global variables added by them.

By default, the page will reload after a consent change (removal/addition of a script tag) to make sure the page is in a "fresh" state.
:::

There are some examples of services being migrated to Tealium and CMP under `Integration Guides` in the sidebar.

### Tag configuration

Depending on how script tags get loaded and configured, simply replacing the tags might not be enough.
Ideally, the external script simply gets loaded by Tealium while being configured on the website (after making sure the script was properly loaded and executed).
For most other cases, there are predefined tags available, which can be configured in the tag manager directly.

There are some examples of services being migrated to Tealium and CMP under `Examples` in the sidebar.