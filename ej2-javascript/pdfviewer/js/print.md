---
layout: post
title: Print in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Print in ##Platform_Name## Pdfviewer control

The PDF Viewer supports printing the loaded PDF file. You can enable/disable the print using the following code snippet.

```

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Essential JS 2</title>
<!-- Essential JS 2 fabric theme -->
<link href="{{:CDN_LINK}}ej2-pdfviewer/styles/fabric.css" rel="stylesheet" type="text/css"/>
<!-- Essential JS 2 PDF Viewer's global script -->
<script src="{{:CDN_LINK}}dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
<!--element which is going to render-->
<div id='container'>
<div id='PdfViewer' style="height:500px;width:100%;">
</div>
</div>
</body>
</html>

```

```javascript

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enablePrint: true,
                    documentPath: "PDF_Succinctly.pdf",
                    serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

```

![Alt text](./images/print.png)

You can invoke print action using the following code snippet.,

```javascript

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enablePrint: true,
                    documentPath: "PDF_Succinctly.pdf",
                    serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');
pdfviewer.print.print();

```

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)
