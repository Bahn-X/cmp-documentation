# Suppress UI on legal pages

It might be necessary to suppress the consent layer UI on certain pages, e.g. if they have to be accessible at all times.

## Using the `utag_data` object

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
