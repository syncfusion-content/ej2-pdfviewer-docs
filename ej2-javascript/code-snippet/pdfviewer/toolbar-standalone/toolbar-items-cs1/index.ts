


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',toolbarSettings: { showTooltip : true, toolbarItem: ['OpenOption']}});
pdfviewer.appendTo('#PdfViewer');
