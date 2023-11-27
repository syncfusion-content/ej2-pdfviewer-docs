

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ 
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('Strikethrough');
});

document.getElementById('setNone').addEventListener('click', ()=> {
    pdfviewer.annotation.setAnnotationMode('None');
});