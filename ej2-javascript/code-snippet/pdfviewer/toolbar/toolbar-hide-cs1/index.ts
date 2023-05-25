


import { PdfViewer, Toolbar, Magnification, Annotation, Navigation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableToolbar: false, documentPath:'PDF_Succinctly.pdf'});
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');



