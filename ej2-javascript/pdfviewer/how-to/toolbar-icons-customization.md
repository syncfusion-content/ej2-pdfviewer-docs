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

{% tabs %}
{% highlight js tabtitle="Standalone" %}

   let toolItem: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
   };
    
   //Initialize EJ2 Pdfviewer Container component with custom toolbar item.
   let viewer: PdfViewer = new PdfViewer();
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

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

   let toolItem: CustomToolbarItemModel = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
   };
    
   //Initialize EJ2 Pdfviewer Container component with custom toolbar item.
   let viewer: PdfViewer = new PdfViewer();
   viewer.toolbarSettings = { toolbarItems: [toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}
   viewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
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

{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']