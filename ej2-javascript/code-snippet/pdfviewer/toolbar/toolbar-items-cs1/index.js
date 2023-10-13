let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib",
    toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');


