---
layout: post
title: Text markup annotation in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Text markup annotation in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Text markup annotation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Text markup annotation in ##Platform_Name## Pdfviewer control

The PDF Viewer control provides the options to add, edit, and delete text markup annotations such as highlight, underline, and strikethrough annotations in the PDF document.

![Alt text](.././images/text_markup_annotation.png)

## Highlight a text

There are two ways to highlight a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Highlight** option in the context menu that appears.

![Alt text](.././images/highlight_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Highlight** button in the annotation toolbar. It enables the highlight mode.
    * Select the text and the highlight annotation will be added.
    * You can also select the text and apply the highlight annotation using the **Highlight** button.

![Alt text](.././images/highlight_button.PNG)

In the pan mode, if the highlight mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for highlighting the text.

Refer to the following code snippet to switch to highlight mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';
    
PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Highlight');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Highlight</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
        
<script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/highlight-mode-cs1" %}

Refer to the following code snippet to switch back to normal mode from highlight mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Highlight');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Highlight</button>
    <!--Element to set normal mode-->
    <button id="setNone">Normal Mode</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
    <script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}
          
N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/highlight-normal-mode-cs1" %}

## Underline a text

There are two ways to underline a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Underline** option in the context menu that appears.

![Alt text](.././images/underline_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Underline** button in the annotation toolbar. It enables the underline mode.
    * Select the text and the underline annotation will be added.
    * You can also select the text and apply the underline annotation using the **Underline** button.

![Alt text](.././images/underline_button.png)

In the pan mode, if the underline mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for underlining the text.

Refer to the following code snippet to switch to underline mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Underline');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Underline</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
    <script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`          

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/underline-mode-cs1" %}

Refer to the following code snippet to switch back to normal mode from underline mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Underline');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Underline</button>
    <!--Element to set normal mode-->
    <button id="setNone">Normal Mode</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
    <script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`          

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/underline-normal-mode-cs1" %}

## Strikethrough a text

There are two ways to strikethrough a text in the PDF document:

1. Using the context menu
    * Select a text in the PDF document and right-click it.
    * Select **Strikethrough** option in the context menu that appears.

![Alt text](.././images/strikethrough_context.png)

<!-- markdownlint-disable MD029 -->
2. Using the annotation toolbar
    * Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
    * Select the **Strikethrough** button in the annotation toolbar. It enables the strikethrough mode.
    * Select the text and the strikethrough annotation will be added.
    * You can also select the text and apply the strikethrough annotation using the **Strikethrough** button.

![Alt text](.././images/strikethrough_button.png)

In the pan mode, if the strikethrough mode is entered, the PDF Viewer control will switch to text select mode to enable the text selection for striking through the text.

Refer to the following code snippet to switch to strikethrough mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Strikethrough');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Strikethrough</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
    <script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`          

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/strikethrough-mode-cs1" %}

Refer to the following code snippet to switch back to normal mode from underline mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});

pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Strikethrough');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
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
	<!--Element to set text markup annotation mode-->
    <button id="set">Strikethrough</button>
    <!--Element to set normal mode-->
    <button id="setNone">Normal Mode</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>        
    </div>
    <script src="index.ts" type="text/typescript"></script>
</body>
</html>
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`  
          
{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/strikethrough-normal-mode-cs1" %}

## Deleting a text markup annotation

The selected annotation can be deleted by the following ways:

1. Using Delete key
    * Select the annotation to be deleted.
    * Click the Delete key in the keyboard. The selected annotation will be deleted.

2. Using the annotation toolbar
    * Select the annotation to be deleted.
    * Click the **Delete Annotation** button in the annotation toolbar. The selected annotation will be deleted.

![Alt text](.././images/delete_button.png)

## Editing the properties of the text markup annotation

The color and the opacity of the text markup annotation can be edited using the Edit Color tool and the Edit Opacity tool in the annotation toolbar.

### Editing color

The color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Alt text](.././images/edit_color.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![Alt text](.././images/edit_opacity.png)

## Setting default properties during control initialization

The properties of the text markup annotation can be set before creating the control using highlightSettings, underlineSettings, and strikethroughSettings.

>After editing the default color and opacity using the Edit Color tool and Edit Opacity tool, they will be changed to the selected values.

Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
highlightSettings: {author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: ''},
underlineSettings: {author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: ''},
strikethroughSettings: {author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: ''} });
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
highlightSettings: {author: 'Guest User', subject: 'Important', color: '#ffff00', opacity: 0.9, modifiedDate: ''},
underlineSettings: {author: 'Guest User', subject: 'Points to be remembered', color: '#00ffff', opacity: 0.9, modifiedDate: ''},
strikethroughSettings: {author: 'Guest User', subject: 'Not Important', color: '#ff00ff', opacity: 0.9, modifiedDate: ''} });
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Performing undo and redo

The PDF Viewer performs undo and redo for the changes made in the PDF document. In text markup annotation, undo and redo actions are provided for:

* Inclusion of the text markup annotations.
* Deletion of the text markup annotations.
* Change of either color or opacity of the text markup annotations.

Undo and redo actions can be done by the following ways:

1. Using keyboard shortcuts:
    After performing a text markup annotation action, you can undo it by using Ctrl + Z shortcut and redo by using Ctrl + Y shortcut.
2. Using toolbar:
    Undo and redo can be done using the **Undo** tool and **Redo** tool provided in the toolbar.

Refer to the following code snippet for calling undo and redo actions from the client-side.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('undo').addEventListener('click', ()=> {
    pdfviewer.undo();
});

document.getElementById('redo').addEventListener('click', ()=> {
    pdfviewer.redo();
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
    <!--Element to call undo-->
    <button id="undo">Undo</button>
    <!--Element to call redo-->
    <button id="redo"> Redo</button>
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

{% previewsample "page.domainurl/code-snippet/pdfviewer/text-markup-annotation/undo-redo-cs1" %}

## Saving the text markup annotation

When you click the download tool in the toolbar, the text markup annotations will be saved in the PDF document. This action will not affect the original document.

## Printing the text markup annotation

When the print tool is selected in the toolbar, the PDF document will be printed along with the text markup annotations added to the pages. This action will not affect the original document.

## Disabling text markup annotation

The PDF Viewer control provides an option to disable the text markup annotation feature. The code snippet for disabling the feature is as follows.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', enableTextMarkupAnnotation: false });
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', enableTextMarkupAnnotation: false });
pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)
