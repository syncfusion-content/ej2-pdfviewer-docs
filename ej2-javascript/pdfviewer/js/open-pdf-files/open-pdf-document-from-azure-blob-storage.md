---
layout: post
title: Open PDF from Azure Blob Storage in ##Platform_Name## Pdfviewer control | Syncfusion
description:  Learn about how to Open PDF from Azure Blob Storage in ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Open PDF from Azure Blob Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Azure Blob Storage

To load a PDF from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in JavaScript

Start by following the steps provided in this [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:**  Modify the Controller.cs File in the Web Service Project

Create a web service project in .NET Core 3.0 or above. You can [Refer to this link to create web service project](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). Modify the `Load` method in the controller.cs file of your web service project to load a PDF from Azure Blob Storage.


```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents

public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
  Console.WriteLine("Load called");
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.TryParse(jsonObject["isFileName"], out bool isFileName) && isFileName)
    {
      //Connection String of Storage Account
      string _connectionString = "Here Place Your Connection string";
      // Create a BlobServiceClient object by passing the connection string.
      BlobServiceClient blobServiceClient = new BlobServiceClient(_connectionString);
      // Get a reference to the container
      string _containerName = "Here Place Your container string";
      string fileName = jsonObject["document"];
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_containerName);
      BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
      MemoryStream memoryStream = new MemoryStream();
      blockBlobClient.DownloadTo(memoryStream);
      byte[] bytes = memoryStream.ToArray();
      stream = new MemoryStream(bytes);
    }
     else
    {
      if (Convert.FromBase64String(jsonObject["document"]) is byte[] bytes)
      {
        stream = new MemoryStream(bytes);
      }
      else
      {
        return Content("Invalid document format");
      }
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
}
```

**Step 3:**  Set the PDF Viewer Properties in JavaScript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the documentPath property of the PDF viewer component to the name of the PDF file you want to load from Azure Blob Storage. Ensure that you pass the document name from the bucket to the documentPath property.

{% raw %}

```javascript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,BookmarkView,
TextSelection, Annotation);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44309" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

N> Replace **Here Place Your Connection string** with the actual connection string for your Azure Blob Storage account and **Here Place Your container string** with the actual container name

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage).