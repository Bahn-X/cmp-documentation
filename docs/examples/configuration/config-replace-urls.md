# Replace urls for imprint and privacy page

The UI shows links to a privacy statement and imprint page, which are managed in the Usercentrics admin panel.
By default, these point to the relative paths `/impressum` and `/datenschutz`.

## Using the `utag_data` object

Overriding the urls can be achieved using the `utag_data` object and setting the `cmp_imprint_url` and `cmp_privacy_url` properties ([see list of options](docs/api/interfaces/cmpoptions.md)).

Example (this could be in your template file):

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
