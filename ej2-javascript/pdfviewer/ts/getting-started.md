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

This section briefly explains how to create **PDF Viewer** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Adding PDF Viewer component

* Add the PDF Viewer component following code in the `app.ts`

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');
```

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
{% include code-snippet/pdfviewer/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs2" %}

## Module injection

To create PDF Viewer with additional features, inject the required modules. The following modules are used to extend PDF Viewer's basic functionality:-

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

> You can refer to our [JavaScript PDF Viewer](https://www.syncfusion.com/javascript-ui-controls/js-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript PDF Viewer example](https://ej2.syncfusion.com/demos/#/material/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.

## Limitation over Server-Backed PDF Viewer to Standalone PDF Viewer control

When comparing a Standalone PDF Viewer to a Server-Backed PDF Viewer control, it's crucial to understand the limitations that the Standalone PDF Viewer may have in comparison. These limitations are important to consider

### PNG Image Support

The Standalone PDF Viewer does not have the capability to utilize PNG format for adding images to handwritten annotations ,custom stamp ,signature and initial form fields. It's important to be aware that only certain image formats, such as JPEG, are compatible for these purposes.

### Local File Access

* The Standalone PDF Viewer control does not have the capability to directly access and load local physical files from a user's device. As a result, it is not possible to use a documentPath to load a PDF file directly from a local server within the viewer.

* The Standalone PDF Viewer allows users to export annotations and form fields from the viewer, it's important to be aware that the viewer does not support the direct import of annotations and form fields from a locally specified file path. In other words, you can extract annotations and form fields from the viewer, but you cannot reintroduce them into the viewer from external sources by specifying a file path located on your local device.

N> These limitations are temporary and are expected to be addressed in the near future.