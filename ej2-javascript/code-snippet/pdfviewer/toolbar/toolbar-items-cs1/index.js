let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');


