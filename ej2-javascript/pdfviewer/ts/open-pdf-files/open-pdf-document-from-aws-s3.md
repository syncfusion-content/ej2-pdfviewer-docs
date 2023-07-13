---
layout: post
title: Open PDF from AWS S3 in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Open PDF from AWS S3 in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open PDF from AWS S3
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from AWS S3

To load a PDF from AWS S3 in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Typescript

Start by following the steps provided in this [link](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Typescript. This will give you a basic setup of the PDF viewer component.

**Step 2:**  Modify the Controller.cs File in the Web Service Project

Create a web service project in .NET Core 3.0 or above. You can [Refer to this link to create web service project](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). Modify the `Load` method in the controller.cs file of your web service project to load a PDF from AWS S3.

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.Runtime;
using Amazon.S3.Model;

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  Console.WriteLine("Load called");
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();
  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if(bool.Parse(jsonObject["isFileName"]))
    {
      RegionEndpoint bucketRegion = RegionEndpoint.USEast1;
      // Configure the AWS SDK with your access credentials and other settings
      var s3Client = new AmazonS3Client("YOUR_ACCESS_KEY", "YOUR_SECRET_KEY", bucketRegion);
      string document = jsonObject["document"];
      // Specify the document name or retrieve it from a different source
      var response = await s3Client.GetObjectAsync("YOUR_BUCKET_NAME", document);
      Stream responseStream = response.ResponseStream;
      MemoryStream memStream = new MemoryStream();
      responseStream.CopyTo(memStream);
      memStream.Seek(0, SeekOrigin.Begin);
      byte[] bytes = memStream.ToArray();
      stream = new MemoryStream(bytes);
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

**Step 3:**  Set the PDF Viewer Properties in Typescript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the documentPath property of the PDF viewer component to the name of the PDF file you want to load from AWS S3. Ensure that you pass the document name from the bucket to the documentPath property.

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

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

N>  Replace **YOUR_ACCESS_KEY** and **YOUR_SECRET_KEY** with your actual AWS access key and secret key