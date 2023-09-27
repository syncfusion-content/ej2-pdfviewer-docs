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

# Getting started in ##Platform_Name## PDF Viewer control

This section explains the steps to create a simple TypeScript PDF Viewer within your application and demonstrate its basic usage.

## Installation and configuration

To get started with PDF Viewer component, you can clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install necessary packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuration system JS

[Syncfusion PDF Viewer packages](#dependencies) should be mapped in the `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-inplace-editor": "syncfusion:ej2-inplace-editor/dist/ej2-inplace-editor.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-pdfviewer": "syncfusion:ej2-pdfviewer/dist/ej2-pdfviewer.umd.min.js",
        "@syncfusion/ej2-drawings": "syncfusion:ej2-drawings/dist/ej2-drawings.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js",
        "@syncfusion/ej2-filemanager": "syncfusion:ej2-filemanager/dist/ej2-filemanager.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding CSS reference

Add the components CSS in `[src/styles/styles.css]` using the following code.

```
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
```

## Adding PDF Viewer component

* Add the PDF Viewer component following code in the `app.ts`

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
```

N> From 23.1 version, it is must to call **pdfviewer.dataBind();** before load function. Refer [here](./troubleshooting/document-loading-issues) for more details.

* Add an HTML div element to act as the PDF Viewer element `index.html` using the following code.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PDF Viewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs1" %}

## Module injection

To create PDF Viewer with additional features, inject the required modules. The following modules are used to extend PdfViewer's basic functionality:-

* `LinkAnnotation`:-  Inject this module to use PDF Viewer link annotation.
* `BookmarkView`:-  Inject this module to use bookmark view of the PDF Viewer.
* `Magnification`:-  Inject this module to magnify the PDF Document.
* `Navigation`:-  Inject this module to use page navigation on PDF Document.
* `TextSelection`:-  Inject this module to use text selection with the PDF Document.
* `ThumbnailView`:-  Inject this module to use thumbnail view of the PDF Viewer
* `Toolbar`:-  Inject this module to enable the user interface for toolbar option in PDF Viewer.
* `Print`:-  Inject this module to use pdfviewer print feature.
* `Annotation`:-  Inject this module to use pdfviewer annotation feature.
* `TextSearch`:-  Inject this module to use pdfviewer text search feature.
* `FormFields`:-  Inject this module to use pdfviewer form fields feature.
* `FormDesigner`:-  Inject this module to use pdfviewer form designer feature.

These modules should be injected into the PDF Viewer using `PdfViewer.Inject` method.

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)

## How to run the PDF Viewer web service

1.Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.

2.Navigate to the `ASP.NET Core` folder and open it in the command prompt.

3.Use the below command to restore the required packages.

```
 dotnet restore
```

4.Use the below command to run the web service.

```
 dotnet run
```

5.You can see that the PDF Viewer server instance runs in the localhost with the port number [`localhost:5001`](https://localhost:5001/) and navigate to the PDF Viewer Web control [`localhost:5001/pdfviewer`](https://localhost:5001/pdfviewer) which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

```ts
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://localhost:5001/pdfviewer';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('PDF_Succinctly.pdf', null);
```

N> When configuring the server-backed PDF viewer, it's essential to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

> You can refer to our [JavaScript PDF Viewer](https://www.syncfusion.com/javascript-ui-controls/js-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript PDF Viewer example](https://ej2.syncfusion.com/demos/#/material/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.