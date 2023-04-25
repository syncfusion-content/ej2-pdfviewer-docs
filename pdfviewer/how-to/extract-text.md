---
layout: post
title: Extract text in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Extract text in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Extract text 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Extract text in ##Platform_Name## Pdfviewer control

To extract text in Syncfusion PDF viewer, you can use the **isExtractText** property and **extractTextCompleted** event.This allows you to extract the text from a page along with the bounds.

Here is an example of how you can use the **isExtractText** property and **extractTextCompleted** event:

```javascript

viewer.isExtractText = true;
viewer.extractTextCompleted = args => {
    //Extract the Complete text of load document
    console.log(args);
    console.log(args.documentTextCollection[1]);
    //Extract the Text data.
    console.log(args.documentTextCollection[1][1].TextData);
    //Extract Text in the Page.
    console.log(args.documentTextCollection[1][1].PageText);
    //Extracts the first text of the PDF document along with its bounds
    console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
};

```

Find the sample [how to extract Text](https://stackblitz.com/edit/kzd4jd-dcser9?file=index.js)