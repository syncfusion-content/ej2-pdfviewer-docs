---
layout: post
title: Save PDF file to AWS S3 in ##Platform_Name## Pdfviewer control | Syncfusion
description:  Learn about how to Save PDF file to AWS S3 in ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Save PDF file to AWS S3
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to AWS S3

To save a PDF file to AWS S3, you can follow the steps below:

**Step 1:** Create a PDF Viewer sample in JavaScript

Follow the instructions provided in this [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in JavaScript. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the web service project to save the downloaded document to AWS S3

Create a web service project in .NET Core (version 3.0 and above) by following the steps in this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the controller.cs file of your web service project, add the following code to modify the `Download` method. This code saves the downloaded PDF document to AWS S3 bucket.

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.Runtime;
using Amazon.S3.Model;

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client("YOUR_ACCESS_KEY", "YOUR_SECRET_KEY", bucketRegion);
  string bucketName = "YOUR_BUCKET_NAME";
  string documentName = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    var request = new PutObjectRequest
    {
      BucketName = bucketName,
      Key = result + "_download.pdf",
      InputStream = stream,
    };
    // Upload the PDF document to AWS S3
    var response = s3Client.PutObjectAsync(request).Result;
  }
  return Content(documentBase);
}
```

**Step 3:**  Set the PDF Viewer Properties in JavaScript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the URL of your web service project that hosts in the web service project, set the `documentPath` property to the PDF file name you want to load from AWS S3. Ensure that you pass the document name from the AWS S3 bucket to the `documentPath` property. This specifies the location of the PDF file to be loaded by the viewer component.

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

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

N>  Replace **YOUR_ACCESS_KEY** and **YOUR_SECRET_KEY** with your actual AWS access key and secret key