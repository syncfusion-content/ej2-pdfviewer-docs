---
layout: post
title: Rendering events in ##Platform_Name## PDF Viewer control | Syncfusion
description: Learn here all about pageRenderInitiate and pageRenderComplete event in Syncfusion ##Platform_Name## PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# PageRenderInitiate and pageRenderComplete event

In Syncfusion PDF Viewer, `pageRenderInitiate` and `pageRenderComplete` actions are events that occur during the rendering process of PDF documents. 

**PageRenderInitiate** 

The `pageRenderInitiate` event is triggered when the rendering of a page in the PDF document begins. This event provides developers with an opportunity to perform any necessary initialization or setup before the rendering of the page content commences. It can be utilized to prepare resources, set up rendering parameters, or execute any other actions required before the page rendering process starts.

**PageRenderComplete**

The `pageRenderComplete` event is triggered when the rendering of a page in the PDF document is completed. This event allows developers to perform cleanup tasks or finalize rendering-related processes after the rendering of the page content finishes. It can be used to release resources, finalize rendering settings, or handle any post-rendering tasks necessary for the application.


```ts

pdfviewer.pageRenderInitiate = (args: any) => {
    // This method is called when the page rendering starts
   console.log('Rendering of pages started');
   console.log(args);
 };
 
pdfviewer.pageRenderComplete = (args: any) => {
    // This method is called when the page rendering completes
    console.log('Rendering of pages completed');
    console.log(args);
};

```

The provided code demonstrates how to subscribe to the `pageRenderInitiate` and `pageRenderComplete` events in the Syncfusion PDF Viewer component. 