---
layout: post
title: Getting started with ##Platform_Name## PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: PDF Viewer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Standalone PDF Viewer control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

### Component Initialization with CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/23.1.36/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/23.1.36/ej2-base/styles/material.css)

N> While referring the scripts from the downloaded resources in your application, make sure to place the 'ej2-pdfviewer-lib' assets in the same directory as the 'ej2.min.js' script.

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `Div` element and initiate the `Essential JS 2 PDF Viewer` component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/es5-getting-started-cs2" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 PDF Viewer` component.

## Limitation over Server-Backed PDF Viewer to Standalone PDF Viewer control

When comparing a Standalone PDF Viewer to a Server-Backed PDF Viewer control, it's crucial to understand the limitations that the Standalone PDF Viewer may have in comparison. These limitations are important to consider

### PNG Image Support

The Standalone PDF Viewer does not have the capability to utilize PNG format for adding images to handwritten annotations ,custom stamp ,signature and initial form fields. It's important to be aware that only certain image formats, such as JPEG, are compatible for these purposes.

### Local File Access

* The Standalone PDF Viewer control does not have the capability to directly access and load local physical files from a user's device. As a result, it is not possible to use a documentPath to load a PDF file directly from a local server within the viewer.

* The Standalone PDF Viewer allows users to export annotations and form fields from the viewer, it's important to be aware that the viewer does not support the direct import of annotations and form fields from a locally specified file path. In other words, you can extract annotations and form fields from the viewer, but you cannot reintroduce them into the viewer from external sources by specifying a file path located on your local device.

N> These limitations are temporary and are expected to be addressed in the near future.