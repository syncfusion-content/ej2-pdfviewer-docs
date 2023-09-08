let pdfviewer: PdfViewer = new PdfViewer({documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']}});
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');


