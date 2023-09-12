let pdfviewer: PdfViewer = new PdfViewer({documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbar.showToolbarItem(new Array("OpenOption"),false);

