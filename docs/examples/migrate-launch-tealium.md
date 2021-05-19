# Migrating Adobe Analytics loaded via Adobe Launch to Tealium

In case Adobe Launch is used to load Adobe Analytics, the easiest way to migrate is to simply integrate Launch into Tealium (tag manager into tag manager) and let Launch handle the analytics scripts.

:::caution
This is only applicable if Adobe Launch loads one script, e.g. Analytics, which we can map to a single DSP.
**DO NOT** use if Launch itself loads more than a single service for which consent is required!
:::

## Before

Consider the following example of Adobe Launch loading Adobe Analytics:

<img src={require('../img/launch-analytics.png').default} width="500" alt="Adobe Launch loads Adobe Analytics"/>

```html
<head>
  <!-- Adobe Analytics datalayer -->
  <script>
    var datalayer = {
      // ...
    };
  </script>

  <!-- Adobe Launch tag -->
  <script src="//assets.adobedtm.com/xxx/xxx/launch-xxx.min.js" async></script>
</head>
```

## After

After removing the Adobe Launch tag and adding the Tealium and `utag_data` object tag, the `html` should look as follows ([note that the Tealium tag moved to right after the opening `<body>` tag](https://docs.tealium.com/platforms/javascript/install/#code-placement)):

<!-- prettier-ignore-start -->
```html
<head>
    <!-- existing Adobe Analytics datalayer remains -->
  <script>
    var datalayer = {
      // ...
    };
  </script>
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

:::note
- `ACCOUNT` is the Tealium account used
- `PROFILE` is the currently used Tealium profile, i.e. the profile used to manage your website
- `STAGE` is the current stage being used: `prod`, `qa` or `dev`
  - ⚠️ **be careful to select the proper stage for your deployment target**
:::
    
This setup will:

- load Tealium
- load the CMP
- check for "Adobe Analytics" consent using the CMP
  - reminder: this is only allowed if Launch exclusively loads Analytics
- if consent is granted
  - let Tealium load Adobe Launch tag
  - let Adobe Launch load the actual Adobe Analytics tags

<img src={require("../img/tealium-launch-analytics-large.png").default} width="500" alt="Tealium loads Launch loads Analytics"/>
