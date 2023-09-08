

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf' });
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('undo').addEventListener('click', ()=> {
    pdfviewer.undo();
});

document.getElementById(‘redo’).addEventListener('click', ()=> {
    pdfviewer.redo();
});


