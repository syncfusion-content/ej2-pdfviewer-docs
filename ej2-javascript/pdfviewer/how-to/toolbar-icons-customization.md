---
layout: post
title: Customize toolbar in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Customize toolbar in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize toolbar in PDF Viewer component

## How to customize existing toolbar in PDF Viewer component

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by **CustomToolbarItemModel** and with existing items in [**toolbarItems**](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

```ts

let viewer: PdfViewer = new PdfViewer();
var toolItem = {
   prefixIcon: 'e-icons e-paste',
   cssClass: 'e-de-toolbar-btn-end e-de-lock-dropdownbutton',
   id: 'print',
   text: 'Save',
   tooltipText: 'Custom toolbar item',
};
viewer.toolbarSettings = { toolbarItems: [toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}
viewer.appendTo("#pdfViewer");

//To handle custom toolbar click event.
    viewer.toolbarClick = function (args) {
      if (args.item && args.item.id === 'print') {
         viewer.printModule.print();
      }
      else if (args.item && args.item.id === 'download') {
         viewer.download();
      }
   };
};

```

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']