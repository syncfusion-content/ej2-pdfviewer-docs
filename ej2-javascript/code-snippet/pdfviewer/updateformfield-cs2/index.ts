

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath:'FormDesigner.pdf' });
pdfviewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function (args) {
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } } as TextFieldSettings);
pdfviewer.formDesignerModule.addFormField("Textbox", { name: "Textfield", bounds: { X: 300, Y: 229, Width: 150, Height: 24 } } as TextFieldSettings);
pdfviewer.formDesignerModule.updateFormField(pdfviewer.formFieldCollections[0], { backgroundColor: 'red' } as TextFieldSettings);
}


