---
layout: post
title: Toolbar in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Toolbar in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Toolbar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in ##Platform_Name## Pdfviewer control

The PDF Viewer comes with a powerful built-in toolbar to execute important actions such as page navigation, text search,view mode,download,print,bookmark, and thumbnails.

The following table shows built-in toolbar items and its actions:-

| Option | Description |
|---|---|
| OpenOption | This option provides an action to load the PDF documents to the PDF Viewer.|
| PageNavigationTool | This option provides an action to navigate the pages in the PDF Viewer. It contains GoToFirstPage,GoToLastPage,GotoPage,GoToNext, and GoToLast tools.|
| MagnificationTool | This option provides an action to magnify the pages either with predefined or user defined zoom factors in the PDF Viewer. Contains ZoomIn, ZoomOut, Zoom, FitPage and FitWidth tools.|
| PanTool | This option provides an action for panning the pages in the PDF Viewer.|
| SelectionTool | This option provides an action to enable/disable the text selection in the PDF Viewer.|
| SearchOption | This option provides an action to search a word in the PDF documents.|
| PrintOption | This option provides an action to print the PDF document being loaded in the PDF Viewer.|
| DownloadOption |This Download option provides an action to download the PDF document that has been loaded in the PDF Viewer.|
| UndoRedoTool | This tool provides options to undo and redo the annotation actions performed in the PDF Viewer.|
| AnnotationEditTool | This tool provides options to enable or disable the edit mode of annotation in the PDF Viewer.|
| FormDesignerEditTool | This tool provides options to enable or disable the edit mode of form fields in the PDF Viewer.|

## Show/Hide the default toolbar

The PDF Viewer has an option to show or hide the complete default toolbar. You can achieve this by using following two ways.,

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
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

* **Show/Hide toolbar using enableToolbar API as in the following code snippet**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    enableToolbar: false, 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
	<script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`      

{% previewsample "page.domainurl/code-snippet/pdfviewer/toolbar/toolbar-hide-cs1" %}

* **Show/Hide toolbar using showToolbar as in the following code snippet**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');
document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.toolbar.showToolbar(false);
});
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <button id="set">showToolbarItem</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`               

{% previewsample "page.domainurl/code-snippet/pdfviewer/toolbar/toolbar-method-cs1" %}

## Show/Hide the default toolbaritem

The PDF Viewer has an option to show or hide these grouped items in the default toolbar.

* **Show/Hide toolbaritem using toolbarSettings as in the following code snippet.**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib",
    toolbarSettings: { showTooltip : true, toolbarItems: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`    

{% previewsample "page.domainurl/code-snippet/pdfviewer/toolbar/toolbar-items-cs1" %}

* **Show/Hide toolbaritem using showToolbaritem as in the following code snippet**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');
document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.toolbar.showToolbarItem(["OpenOption"],false);
});
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />    
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <button id="set">showToolbarItem</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`               

{% previewsample "page.domainurl/code-snippet/pdfviewer/toolbar/toolbar-items-method-cs1" %}

## See also

* [Toolbar customization](./how-to/toolbar-customization)
* [Feature Modules](./feature-module)