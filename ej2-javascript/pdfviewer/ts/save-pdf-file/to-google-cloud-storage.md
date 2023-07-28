---
layout: post
title: Save PDF files to Google Cloud Storage ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about how to Save PDF files to Google Cloud Storage in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Save PDF files to Google Cloud Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Google Cloud Storage

To save a PDF file to Google Cloud Storage, you can follow the steps below:

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the instructions provided in this [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in typescript. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

  
```

5. Modify the `Download()` method to save the downloaded PDF files to Google Cloud Storage bucket

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string bucketName = _bucketName;
  string fileName = jsonObject["documentId"];

  // Convert the base64 string back to bytes
  string result = Path.GetFileNameWithoutExtension(fileName);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Google Cloud Storage
  using (var memoryStream = new MemoryStream(documentBytes))
  {
    _storageClient.UploadObject(bucketName, result + "_downloaded.pdf", null, memoryStream);
  }
  return Content(documentBase);
} 
```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:**  Set the PDF Viewer Properties in Typescript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the URL of your web service project that hosts in the web service project, set the `documentPath` property to the PDF file name you want to load from Google Cloud Storage. Ensure that you pass the document name from the bucket to the `documentPath` property. This specifies the location of the PDF file to be loaded by the viewer component.

```typescript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name that you want to load from Google Cloud Storage. Make sure to pass the document name from the bucket to the `documentPath` property of the PDF viewer component

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)