---
layout: post
title: Open PDF files ##Platform_Name## Pdfviewer control | Syncfusion
description: This page helps you to learn about how to load PDF files from various locations in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open PDF files 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files

You might need to open and view the PDF files from various location. In this section, you can find the information about how to open PDF files from URL, database, local file system, and as base64 string.

## Opening a PDF from URL

If you have your PDF files in the web, you can open it in the viewer using URL.

**Step 1:** Create a Simple PDF Viewer Sample in JavaScript

Start by following the steps provided in this [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Load()` method to open it in the viewer using URL

```csharp

public IActionResult Load([FromBody] Dictionary<string, string> jsonData)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string documentPath = GetDocumentPath(jsonData["document"]);
      if (!string.IsNullOrEmpty(documentPath))
      {
        byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
        stream = new MemoryStream(bytes);
      }
      else
      {
        string fileName = jsonData["document"].Split(new string[] { "://" }, StringSplitOptions.None)[0];
        if (fileName == "http" || fileName == "https")
        {
          WebClient WebClient = new WebClient();
          byte[] pdfDoc = WebClient.DownloadData(jsonData["document"]);
          stream = new MemoryStream(pdfDoc);
        }
        else
        {
          return this.Content(jsonData["document"] + " is not found");
        }
      }
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
      stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
}

```

**Step 3:**  Set the PDF Viewer Properties in React PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server.Modify the documentPath with the correct PDF Document URL want to load. 

```javascript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace correct PDF Document URL want to load
viewer.documentPath="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');

```

[View sample in GitHub]()

## Opening a PDF from base64 data

The following steps explains how the PDF file can be loaded in PDF Viewer as base64 string.

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Use the following code snippet to load PDF document using base64 string.

```
<button id='load'>LoadDocumentFromBase64</button>
```

```javascript
// Load PDF document from Base64 string
document.getElementById('load').addEventListener('click', () => {
  viewer.load(
    'data:application/pdf;base64,'+ AddBase64String, null);
}

[View sample in GitHub]()