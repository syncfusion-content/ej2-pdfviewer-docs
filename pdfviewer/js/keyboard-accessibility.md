---
layout: post
title: Keyboard accessibility in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Keyboard accessibility in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Keyboard accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard accessibility in ##Platform_Name## Pdfviewer control

The JavaScript PDF Viewer supports the following keyboard interactions.

|**Action**|**Windows**|**Macintosh**|
|--|--|--|
|**Shortcuts for page navigation**|||
|Navigate to the first page|Home|Function + Left arrow|
|Navigate to the last page|End|Function + Right arrow|
|Navigate to the previous page|Up Arrow|Up Arrow|
|Navigate to the next page|Down Arrow|Down Arrow|
|**Shortcuts for Zooming**|||
|Perform zoom-in operation|CONTROL + =|COMMAND + =|
|Perform zoom-out operation|CONTROL + -|COMMAND + -|
|Retain the zoom level to 1|CONTROL + 0|COMMAND + 0|
|**Shortcut for Text Search**|||
|Open the search toolbar|CONTROL + F|COMMAND + F|
|**Shortcut for Text Selection**|||
|Copy the selected text or annotation or form field|CONTROL + C|COMMAND + C|
|Cut the selected text or annotation of the form field|CONTROL + X|COMMAND + X|
|Paste the selected text or annotation or form field|CONTROL + Y|COMMAND + Y|
|**Shortcuts for the general operation**|||
|Undo the action|CONTROL + Z|COMMAND + Z|
|Redo the action|CONTROL + Y|COMMAND + Y|
|Print the document|CONTROL + P|COMMAND + P|
|Delete the annotations and form fields|Delete|Delete|

```
<html>
  <head>
    <!--Refer scripts and styles from CDN-->
    <script
      src="https://cdn.syncfusion.com/ej2/20.2.48/dist/ej2.min.js"
      type="text/javascript">
    </script>
    <link
      href="https://cdn.syncfusion.com/ej2/20.2.48/material.css"
      rel="stylesheet"/>
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      rel="stylesheet"/>
    <style>
      body {
        touch-action: none;
      }
    </style>
  </head>
  <body>
      <div class="control-section">
        <div class="content-wrapper">
          <!--Add the PDF Viewer-->
          <div id="pdfViewer" style="height: 640px; width: 100%"></div>
        </div>
      </div>
      <script>
        var viewer = new ej.pdfviewer.PdfViewer({
        //Sets the document path for initial loading
        documentPath: 'PDF_Succinctly.pdf',
        serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
});
//Inject the dependencies required to render the PDF Viewer
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch,
  ej.pdfviewer.Print,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);
viewer.appendTo('#pdfViewer');
      </script>
  </body>
</html>
```