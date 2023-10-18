let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib",
    serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer'
});
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbar.showToolbarItem(new Array("OpenOption"),false);

