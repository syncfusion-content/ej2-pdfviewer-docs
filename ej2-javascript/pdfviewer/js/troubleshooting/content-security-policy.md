---
layout: post
title: Content Security Policy in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
---

# Content Security Policy

Content Security Policy (CSP) is a security feature implemented by web browsers that helps to protect against attacks such as cross-site scripting (XSS) and data injection. It limits the sources from which content can be loaded on a web page.

To enable strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), certain browser features are disabled by default. In order to use Syncfusion controls with strict CSP mode, it is essential to include following directives in the CSP meta tag.

* Syncfusion controls are rendered with calculated **inline styles** and **base64** font icons, which are blocked on a strict CSP-enabled site. To allow them, add the [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the meta tag as follows.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' 'unsafe-inline';
    font-src 'self'  data:;" />

{% endhighlight %}
{% endtabs %}

* Syncfusion **material** and **tailwind** built-in themes contain a reference to the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them, add the [`external font`](https://fonts.googleapis.com/css?family=Roboto:400,500) reference to the [`style-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directives in the above meta tag.

The resultant meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion controls with material and tailwind themes.

{% tabs %}
{% highlight razor tabtitle="HTML" %}

<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>

{% endhighlight %}
{% endtabs %}

* Syncfusion control when images are added as **blob** and **base64**, which are blocked on a strict CSP-enabled site.To overcome this restriction, it is necessary to add the img-src data: directive in the meta tag. To allow them, add the  [`style-src 'self' 'unsafe-inline';`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) and [`img-src 'self' data:;`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directives as follows.

{% tabs %}
{% highlight razor tabtitle="HTML" %}
<head>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline' 'unsafe-eval';
    img-src 'self' data: https: blob: 'unsafe-inline'; object-src 'self'" />
</head>
{% endhighlight %}
{% endtabs %}

N> From the release 2023 Vol2 - 22.1 version, the Content Security Policy for Syncfusion controls has been enhanced by implementing a [function template](../template#function-template) approach for template properties to eliminate the usage of the `unsafe-eval` directive in the CSP meta tag.

> [View the JavaScript sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-javascript-csp-example)


Image loading
Syncfusion license banner utilize the image from base64, which is not allowed on strict CSP-enabled sites. To overcome this restriction, it is necessary to add the img-src data: directive in the meta tag or consider registering the license key.