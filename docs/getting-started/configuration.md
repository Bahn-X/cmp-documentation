---
sidebar_position: 2
id: configuration
---

# Configuration

It is possible to configure some consent layer behaviour before loading the CMP, e.g. suppressing the UI on certain pages or disabling the auto-reload after consent changes.
The configuration uses Tealium's data layer, the `utag_data` object (UDO).

To use the configuration, add the [options](../api/interfaces/cmpoptions.md) you need to your existing `utag_data` object.

```html
<script type="text/javascript">
  var utag_data = {
    // see list of options
  };
</script>
```

## Replace urls for imprint and privacy page

The UI shows links to a privacy statement and imprint page, which are managed in the Usercentrics admin panel.
By default, these point to the relative paths `/impressum` and `/datenschutz`, but there might be cases were you want to specify a different target:

```html
<head>
  <script type="text/javascript">
    var utag_data = {
      // ... other options
      cmp_imprint_url: 'website.com/imprint',
      cmp_privacy_url: 'website.com/privacy',
    };
  </script>
</head>
```


## Suppress UI on legal pages

It might be necessary to suppress the consent layer UI on certain pages, e.g. if they have to be accessible at all times.

Suppressing the UI on a page with the **pathname** `/impressum` can be achieved as follows:

```html
<head>
  <script type="text/javascript">
    var utag_data = {
      // ... other options
      cmp_legal_pages: ['/impressum']
    };
  </script>
</head>
```

Please use the **path** part of the url, excluding hostname, query etc., and be as exact as possible, as the strings will be matched against `location.pathname`.

The above example `['/impressum']` will match
- ✅ `webseite.de/impressum` and
- ✅ `webseite.de/sub/path/impressum?query=test`,

but not

- ❌ `webseite.de/sub/path/impressum/1234`.
