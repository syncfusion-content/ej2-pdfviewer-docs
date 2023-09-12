let pdfviewer: PdfViewer = new PdfViewer({documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbar.showToolbarItem(new Array("OpenOption"),false);

