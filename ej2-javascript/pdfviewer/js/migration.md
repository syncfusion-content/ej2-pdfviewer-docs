---
layout: post
title: Print in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
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

### Component Initialization with CDN link for script and style reference

To utilize the Standalone PDF Viewer component in your project, need to add the corresponding script in the below CDN link formats.

<table>
<tr>
<th>Server-Backed PDF Viewer</th>
</tr>
<tr>
<td>
{% tabs %}
{% highlight C# tabtitle=".csproj" hl_lines="1 3" %}

> Script: [`https://cdn.syncfusion.com/ej2/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/material.css`](https://cdn.syncfusion.com/ej2/material.css)

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
{% highlight C# tabtitle=".csproj" hl_lines="1 3" %}

> Script: [`https://cdn.syncfusion.com/ej2/staging/pdfium/ej2.min.js`](https://cdn.syncfusion.com/ej2/staging/pdfium/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/material.css`](https://cdn.syncfusion.com/ej2/material.css)

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

N> While referring the scripts from the downloaded resources in your application, make sure to place the 'ej2-pdfviewer-lib' assets in the same directory as the 'ej2.min.js' script.

### index.html

To render the Standalone PDF Viewer component, add the following code in the **index.html**.

<table>
<tr>
<th>Server-Backed PDF Viewer</th>
</tr>
<tr>
<td>
{% tabs %}
{% highlight ts tabtitle=".csproj" hl_lines="2 3" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
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
{% highlight ts tabtitle=".csproj" hl_lines="2" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

## See also

* [Getting Started with Standalone PDF Viewer Component](./getting-started)

* [Getting Started with Server-Backed PDF Viewer Component](./getting-started-with-server-backed)