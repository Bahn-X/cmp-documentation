# Matomo Integration

This is quick task. Just remove the Matomo integration and include the Tealium script tag. We'll guide you through the process.

## Before

Your Matomo integration should look like this:

```html
<head>
  <!-- Matomo -->
    <script type="text/javascript">
      var _paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://dbwas.service.deutschebahn.com/piwik/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', 'XXX']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <noscript><p><img src="https://dbwas.service.deutschebahn.com/piwik/matomo.php?idsite=XXX&amp;rec=1" style="border:0;" alt="" /></p></noscript>
    <!-- End Matomo Code -->
</head>
```

## After

Search for your Matomo ID, in this case it is `XXX` and send it to us. We will asign your ID to your Tealium profile configuration. 

After removing the Matomo code snippet and adding the Tealium and `utag_data` object tag, the `html` should look as follows ([note that the Tealium tag moved to right after the opening `<body>` tag](https://docs.tealium.com/platforms/javascript/install/#code-placement)):

<!-- prettier-ignore-start -->
```html
<head>
    <!-- nothing to add here -->
</head>
<body>
  <!-- new: Tealium universal data object -->
  <script type="text/javascript">
    var utag_data = {
      // ...
    };
  </script>

  <!-- new: Tealium tag -->
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

> **Note:**
>
> - `ACCOUNT` is the Tealium account used
> - `PROFILE` is the currently used Tealium profile, i.e. the profile used to manage your website
> - `STAGE` is the current stage being used: `prod`, `qa` or `dev`
> - ⚠️ **be careful to select the proper stage for your deployment target**

This setup will:

- load Tealium
- load the CMP
- check for "Matomo" consent using the CMP
- if consent is granted
  - let Tealium load Matomo tag
- Done
