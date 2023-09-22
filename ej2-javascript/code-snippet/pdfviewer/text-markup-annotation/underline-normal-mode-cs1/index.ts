

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
    TextSelection, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,
             BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf' });
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Underline');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
});


