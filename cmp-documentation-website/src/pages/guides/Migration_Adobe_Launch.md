---
sidebar_position: 2
---

# Setup Adobe Analytics via Adobe Launch with Tealium

## Get Tealium account

You need to have the ‘Kontoeinstellungen’ access rights for the next steps. Those need to be done by BahnX team members. You can change this in the upper right menu on ‘Benutzer verwalten’.

### Create profile

1. Go to ‘Profile verwalten’.
2. Create a new profile on the left side.

### Assign DB CMP SDK library

Choose `sdk` in the ‘Bibliotheken’ dropdown above the list and click ‘+ Link zur Bibiliothek’.

Be aware to not use ‘DRAFTS’, use ‘GITHUB FILES’ instead and ‘Approve for publish …’ there.

## Add tags

Create new ‘Tealium Generic Tag’ in Tealium for each stage (`Dev`, `QA`, `Prod`):

3 × do:
- Type: Script
- Base URL: Adobe Launch script URL (use the one for the specific stage).
  This looks like `https://assets.adobetm.com/...`
- Activate the toggle of the specific stage and deactivate all other stages

## Connect Usercentrics to created tags

- Add Usercentrics analytics condition

## Release new version in Tealium


## Replace script tag in your website

Replace Adobe Launch script with Tealium script in your codebase:

Add UTAG data (required, even if empty):

```html
<script type="text/javascript">
  var utag_data = {}
</script>
```

Load Tealium Script:

```html
<script type="text/javascript">
  (function(a,b,c,d){
  a='https://tags.tiqcdn.com/utag/bahnx/YOUR_PROFILE_NAME/YOUR_STAGE/utag.js';
  /* COPY THE COMPLETE EXAMPLE OUT OF THE TEALIUM ADMIN PANEL */
  })();
</script>
```

Snipplet can be found in the Code center (upper right menu in Tealium).

## Add ‘Manage analysis’ button

The user must have the chance to change/revoke their choices. To reopen the consent layer, call:

```javascript
window.DB_CMP.showConsentLayer()
```

This should usually be placed next to footer links like ‘Imprint’, ‘Privacy statement’ etc. The styling should be the same, but technically (accessibility), this should be implemented as a `<button>`.

Example code:

```html
<footer>
  <a href="/imprint">Imprint</a>
  <a href="/privacy-statement">Privacy statement</a>
  <button
    type="button"
    onclick="window.DB_CMP.showConsentLayer()"
  >
    Manage analysis
  </button>
</footer>
```

The location of the button might differ from website to website. E.g. on a mobile website, it might also be found in a hamburger menu. Usually next to the ‘Imprint’ might be a good place.

You might want to use the same styling like the links next to the button by resetting the button styles via CSS.

## Test with and without consent given

Test on a staging/QA or dev environment.

## Present to your data privacy officer

Your data privacy officer will check at least:
- Wording in the consent layer and elswhere
- Connection between consent options and scripts
- Location of the ‘Manage analysis’ button

Release to production only **after approval by your data privacy officer.**

## See other documentation

- https://github.com/Bahn-X/cmp-test/blob/main/docs/setup-tealium-usercentrics.md

