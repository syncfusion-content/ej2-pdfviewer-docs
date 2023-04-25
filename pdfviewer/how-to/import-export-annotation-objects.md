---
layout: post
title: Import export annotation objects in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Import export annotation objects in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Import export annotation objects 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation objects in ##Platform_Name## Pdfviewer control

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotation as object.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

```
<button id="export">Export Annotation</button>
<button id="import">Import Annotation</button>
```

```js
//Export annotation as object.
document.getElementById('export').addEventListener('click', () => {
  viewer.exportAnnotationsAsObject().then(function(value) {
    exportObject = value;
  });
});

//Import annotation that are exported as object.
document.getElementById('import').addEventListener('click', () => {
  viewer.importAnnotation(JSON.parse(exportObject));
});
```

Find the Sample, [how to import and export annotation as object](https://stackblitz.com/edit/bktnkt?devtoolsheight=33&file=index.js)