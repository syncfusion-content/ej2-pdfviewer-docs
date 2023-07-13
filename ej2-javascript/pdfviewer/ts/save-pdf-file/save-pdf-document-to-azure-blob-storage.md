---
layout: post
title: Save PDF file to Azure Blob Storage ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about how to Save PDF file to Azure Blob Storage in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save PDF file to Azure Blob Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Save PDF file to Azure Blob Storage

To save a PDF file to Azure Blob Storage, you can follow the steps below:

**Step 1:** Create a PDF Viewer sample in Typescript

Follow the instructions provided in this [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Typescript. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the web service project to save the downloaded document to Azure Blob Storage

Create a web service project in .NET Core (version 3.0 and above) by following the steps in this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the controller.cs file of your web service project, add the following code to modify the `Download` method. This code saves the downloaded PDF document to Azure Blob Storage container.

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string document = jsonObject["documentId"];

  //Connection String of Storage Account
  string _connectionString = "Here Place Your Connection string";

  // Create a BlobServiceClient object by passing the connection string
   BlobServiceClient blobServiceClient = new BlobServiceClient(_connectionString);

  // Get a reference to the container
  string _containerName = "Here Place Your container string";
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_containerName);

  string result = Path.GetFileNameWithoutExtension(document);
  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_download.pdf");

  // Convert the document base64 string to bytes
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Azure Blob Storage
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    blobClient.Upload(stream, true);
  }
  return Content(documentBase);
}
```

**Step 3:**   Set the PDF Viewer Properties in JavaScript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the URL of your web service project that hosts in the web service project, set the `documentPath` property to the PDF file name you want to load from Azure Blob Storage. Ensure that you pass the document name from the Azure Blob Storage container to the `documentPath` property. This specifies the location of the PDF file to be loaded by the viewer component.

```typescript

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