


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']}
});
pdfviewer.appendTo('#PdfViewer');



