let pdfviewer: PdfViewer = new PdfViewer({documentPath:'PDF_Succinctly.pdf',toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']});
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');


