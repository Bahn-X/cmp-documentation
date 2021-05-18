# Add ‘Manage consent’ button

The user must have the chance to change/revoke their choices. To reopen the consent layer, call:

```javascript
window.DB_CMP.showConsentLayer(); // show the initial layer (what users see for the first time)
window.DB_CMP.showSecondLayer(); // show the second layer with detailed options
```

This should usually be placed next to footer links like ‘Imprint’, ‘Privacy statement’ etc.

Example:

```html
<footer>
  <a href="/imprint">Imprint</a>
  <a href="/privacy-statement">Privacy statement</a>
  <button
    type="button"
    onclick="window.DB_CMP.showSecondLayer()"
  >
    Manage consent
  </button>
</footer>
```

The location of the button might differ from website to website. For example on a mobile website, it might also be found in a hamburger menu. Next to the ‘Imprint’ link usually seems like a safe choice.

You might want to use the same styling as the links next to the button by resetting the button styles via CSS.
