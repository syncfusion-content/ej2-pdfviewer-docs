---
layout: post
title: Open PDF files from Google Drive in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn about how to Open PDF files from Google Drive in ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Open PDF files from Google Drive
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Google Drive

To load a PDF file from Google Drive in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in JavaScript

Start by following the steps provided in this [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _folderID;
public readonly string _applicationName;
public readonly string _jsonFile;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _folderID = _configuration.GetValue<string>("FolderId");
  _applicationName = _configuration.GetValue<string>("ApplicationName");
  _jsonFile = _configuration.GetValue<string>("CredentialJSONFile");
}
```

5. Modify the `Load()` method to load the PDF file from Google Drive.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string objectName = jsonObject["document"];

      UserCredential credential;
      using (var stream1 = new FileStream(_jsonFile, FileMode.Open, FileAccess.Read))
      {
        string credPath = "token.json";
        credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
          GoogleClientSecrets.Load(stream1).Secrets,
          Scopes,
          "user",
          CancellationToken.None,
          new FileDataStore(credPath, true));
      }

      // Create Google Drive API service.
      var service = new DriveService(new BaseClientService.Initializer()
      {
        HttpClientInitializer = credential,
        ApplicationName = ApplicationName,
      });

      // List PDF files in Google Drive
      string folderId = _folderID;
      listRequest.Q = "mimeType='application/pdf' and '" + folderId + "' in parents and trashed=false";
      listRequest.Fields = "files(id, name)";
      var files = await listRequest.ExecuteAsync();
      string fileIdToDownload = null;
      foreach (var file in files.Files)
      { 
        string fileId = file.Id;
        string fileName = file.Name;
        if (fileName == objectName)
        {
          // Save the matching fileId
          fileIdToDownload = fileId;
          break;
        }
      }
      string fileIds = fileIdToDownload;
      var request = service.Files.Get(fileIds);
      await request.DownloadAsync(stream);
      stream.Position = 0;
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
  "FolderId": "Your folder ID from Google Drive",
  "ApplicationName": "Your Application name",
  "CredentialJSONFile": "path/to/.json file"
}
```

N> Replace **Your folder ID from Google Drive**, **Your Application name**, and **path/to/.json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

N> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

**Step 3:**  Set the PDF Viewer Properties in JavaScript PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the documentPath property of the PDF viewer component to the name of the PDF file you want to load from Google Drive. Ensure that you pass the document name from the bucket to the documentPath property.

```javascript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44309" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name that you want to load from Google Drive. Make sure to pass the document name from the folder to the `documentPath` property of the PDF viewer component

[View sample in GitHub]()