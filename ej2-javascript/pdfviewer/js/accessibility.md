---
layout: post
title: Accessibility in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about accessibility in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion PDF Viewer components

The PDF Viewer component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the PDF Viewer component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript,and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components. The following ARIA attributes are used in the PDF Viewer component:

| Attributes | Purpose |
| --- | --- |
| `aria-disabled`| Indicates whether the PDF Viewer component is in a disabled state or not.|
| `aria-expanded`| Indicates whether the suggestion list has expanded or not. |
| `aria-readonly` | Indicates the readonly state of the PDF Viewer element. |
| `aria-haspopup` | Indicates whether the PDF Viewer input element has a suggestion list or not. |
| `aria-label` | Indicates the breadcrumb item text. |
| `aria-labelledby` | Provides a label for the pdfviewer. Typically, the "aria-labelledby" attribute will contain the id of the element used as the pdfviewer's title. |
| `aria-describedby` | This attribute points to the pdfviewer element describing the one it's set on. |
| `aria-orientation` | Indicates whether the pdfviewer element is oriented horizontally or vertically. |
| `aria-valuetext` | Returns the current text of the pdfviewer. |
| `aria-valuemax` | Indicates the Maximum value of the pdfviewer. |
| `aria-valuemin` | Indicates the Minimum value of the pdfviewer. |
| `aria-valuenow` | Indicates the current value of the pdfviewer. |
| `aria-controls` | Attribute is set to the button and it points to the corresponding content. |

## Keyboard interaction

The PDF Viewer component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Message component.

| **Press (Windows)** |**Press (Macintosh)** | **To do this** |
| --- | --- | --- |
|||**Shortcuts for page navigation**|
| <kbd>Home</kbd> | <kbd>Function + Left arrow</kbd> |Navigate to the first page |
| <kbd>End</kbd> |<kbd>Function + Right arrow</kbd> |Navigate to the last page |
|<kbd>Up Arrow</kbd> |<kbd>Up Arrow</kbd> |Navigate to the previous page|
| <kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Navigate to the next page |
|||**Shortcuts for Zooming**|
|<kbd>CONTROL + =</kbd> |<kbd>COMMAND + =</kbd> | Perform zoom-in operation |
| <kbd>CONTROL + -</kbd> | <kbd>COMMAND + -</kbd> | Perform zoom-out operation |
|<kbd>CONTROL + 0</kbd> |<kbd>COMMAND + 0</kbd> | Retain the zoom level to 1 |
|||**Shortcut for Text Search**|
| <kbd>CONTROL + F</kbd> | <kbd>COMMAND + F</kbd> |Open the search toolbar|
|||**Shortcut for Text Selection**|
|<kbd>CONTROL + C</kbd> |<kbd>CONTROL + C</kbd> | Copy the selected text or annotation or form field |
| <kbd>CONTROL + X</kbd> | <kbd>CONTROL + X</kbd> |Cut the selected text or annotation of the form field|
|<kbd>CONTROL + Y</kbd> |<kbd>CONTROL + Y</kbd> |Paste the selected text or annotation or form field|
|||**Shortcuts for the general operation**|
| <kbd>CONTROL + Z</kbd> | <kbd>CONTROL + Z</kbd> |Undo the action|
|<kbd>CONTROL + Y</kbd> |<kbd>CONTROL + Y</kbd> |Redo the action|
| <kbd>CONTROL + P</kbd> | <kbd>CONTROL + P</kbd> |Print the document|
|<kbd>Delete</kbd> |<kbd>Delete</kbd> |Delete the annotations and form fields|



{% tabs %}
{% highlight html tabtitle="Standalone" %}

<html>
  <head>
    <!--Refer scripts and styles from CDN-->
    <script
      src="https://cdn.syncfusion.com/ej2/20.2.48/dist/ej2.min.js"
      type="text/javascript">
    </script>
    <link
      href="https://cdn.syncfusion.com/ej2/20.2.48/material.css"
      rel="stylesheet"/>
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      rel="stylesheet"/>
    <style>
      body {
        touch-action: none;
      }
    </style>
  </head>
  <body>
      <div class="control-section">
        <div class="content-wrapper">
          <!--Add the PDF Viewer-->
          <div id="pdfViewer" style="height: 640px; width: 100%"></div>
        </div>
      </div>
      <script>
        var viewer = new ej.pdfviewer.PdfViewer({
        //Sets the document path for initial loading
        documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
});
//Inject the dependencies required to render the PDF Viewer
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
viewer.appendTo('#pdfViewer');
      </script>
  </body>
</html>


{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<html>
  <head>
    <!--Refer scripts and styles from CDN-->
    <script
      src="https://cdn.syncfusion.com/ej2/20.2.48/dist/ej2.min.js"
      type="text/javascript">
    </script>
    <link
      href="https://cdn.syncfusion.com/ej2/20.2.48/material.css"
      rel="stylesheet"/>
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      rel="stylesheet"/>
    <style>
      body {
        touch-action: none;
      }
    </style>
  </head>
  <body>
      <div class="control-section">
        <div class="content-wrapper">
          <!--Add the PDF Viewer-->
          <div id="pdfViewer" style="height: 640px; width: 100%"></div>
        </div>
      </div>
      <script>
        var viewer = new ej.pdfviewer.PdfViewer({
        //Sets the document path for initial loading
        documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        serviceUrl:'https://services.syncfusion.com/js/production/api/pdfviewer',
});
//Inject the dependencies required to render the PDF Viewer
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
viewer.appendTo('#pdfViewer');
      </script>
  </body>
</html>

{% endhighlight %}
{% endtabs %}

## Ensuring accessibility

The PDF Viewer component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the PDF Viewer component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/pdfviewer.html) in a new window to evaluate the accessibility of the PDF Viewer component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/pdfviewer.html" %}

## See also

* [Accessibility in Syncfusion EJ2 JavaScript components](../common/accessibility)
