---
layout: post
title: Change author name using annotation settings in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Change author name using annotation settings in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change author name using annotation settings 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change author name using annotation settings in ##Platform_Name## Pdfviewer control

The Essential JavaScript PDF Viewer supports to customize a single property of the annotation settings by exposing an API for the properties common to all the annotations.

**API Name** : annotationSettings

|Property Name|Data type & Default Value|Description|
|---|---|---|
|author|String(“Guest”)|specifies the author of the annotation.|
|minWidth|Number(0)|specifies the minWidth of the annotation.|
|maxWidth|Number(0)|specifies the maxWidth of the annotation.|
|minHeight|Number(0)|specifies the minHeight of the annotation.|
|maxHeight|Number(0)|specifies the maxHeight of the annotation.|
|isLock|Boolean(false)|specifies the locked action of the annotations. [If set true unable to select the annotations]|
|isPrint|Boolean(true)|specifies whether the annotations are included or not in Print actions.|
|isDownload|Boolean(true|specifies whether the annotations are included or not in Download actions.|
|Free Text Settings|
|allowOnlyTextInput|Boolean(false)|specifies the allow only text action of the free text annotation. [If set true unable to move or resize the annotations]|

You can change the author name and the other properties using the annotationSettings API as in the following code sample.


{% tabs %}
{% highlight js tabtitle="Standalone" %}

    var pdfviewer = new ej.pdfviewer.PdfViewer({
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
        annotationSettings :{ author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true  },
        freeTextSettings : { allowTextOnly : true }
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
    pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

    var pdfviewer = new ej.pdfviewer.PdfViewer({
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
        serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
        annotationSettings :{ author: 'syncfusion', minHeight: 30, maxHeight: 500, minWidth: 30, maxWidth: 500, isLock: false, isPrint: true, isDownload: true  },
        freeTextSettings : { allowTextOnly : true }
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation,ej.pdfviewer.Print);
    pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}