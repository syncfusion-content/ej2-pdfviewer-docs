---
layout: post
title: Saving PDF files ##Platform_Name## Pdfviewer control | Syncfusion
description: This page helps you to learn here all about saving PDF files in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Saving PDF files 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Saving PDF file
After editing the PDF file with various annotation tools, you will need to save the updated PDF to the server, database, or local file system.

## Save PDF file to Server

Need to save the modified PDF back to a server. To achieve this, proceed with the following steps

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
      string documentName = jsonObject["document"];
      string result = Path.GetFileNameWithoutExtension(documentName);
      string fileName = result + "_downloaded.pdf";

      // Save the file on the server
      string serverFilePath = @"Path to where you need to save your file in the server";

      string filePath = Path.Combine(serverFilePath, fileName);

      using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
      {
        //Saving the new file in root path of application
        stream.CopyTo(fileStream);
        fileStream.Close();
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

## Download PDF file as a copy

In the built-in toolbar, you have an option to download the updated PDF to the local file system, you can use it to download the PDF file.

```html
<button id="download">Download</button>

```

```javascript

document.getElementById('download').addEventListener('click', function () {
  //API to perform download action.
  viewer.download();
});

```

[View sample in GitHub]()