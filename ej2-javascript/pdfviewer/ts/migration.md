---
layout: post
title: Migration from Server-Backed PDF Viewer to Standalone PDF Viewer control in ##Platform_Name## Pdfviewer control | Syncfusion
description: This section explains the features available in the Standalone PDF Viewer over the Server-Backed PDF Viewer in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Migration from Server-Backed PDF Viewer to Standalone PDF Viewer control

## Why Server-Backed PDF Viewer to Standalone PDF Viewer control

The migration to the Standalone PDF Viewer control brings a host of benefits, including improved performance in scrolling, pagination, and printing. These enhancements result in a smoother and more efficient user experience. Additionally, this migration eliminates the need for a Web assembly service dependency, streamlining the system and enhancing maintainability.

* **Enhanced Performance**:
With the Standalone PDF Viewer control, users can expect significant improvements in performance. Scrolling through documents, navigating pages, and printing operations are now optimized for efficiency. Users will experience seamless and fluid interactions, ensuring a more productive and satisfying workflow.

* **Elimination of Web Assembly Service Dependency**:
The migration to the Standalone PDF Viewer control removes the requirement for a Web assembly service dependency.

### App.ts

To render the Standalone PDF Viewer component, add the following code in the **app.ts**.

<table>
<tr>
<th>Server-Backed PDF Viewer</th>
</tr>
<tr>
<td>
{% tabs %}
{% highlight ts tabtitle=".csproj" hl_lines="8 9" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification ,Navigation, Annotation, 
                  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<th>Standalone PDF Viewer</th>
</tr>
<tr>
<td>
{% tabs %}
{% highlight ts tabtitle=".csproj" hl_lines="8" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification ,Navigation, Annotation, 
                  LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

N> If you encounter issues while attempting to host the application, refer to the [troublrshooting file](./troubleshooting/troubleshooting)

## See also

* [Getting Started with Standalone PDF Viewer Component](./getting-started)

* [Getting Started with Server-Backed PDF Viewer Component](./getting-started-with-server-backed)