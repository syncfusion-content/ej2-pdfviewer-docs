---
layout: post
title: Customize context menu in ##Platform_Name## Pdfviewer control | Syncfusion
description: Learn here all about Customize context menu in Syncfusion ##Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: PDF Viewer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in ##Platform_Name## Pdfviewer control

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the `addCustomMenu()` method and custom action is defined using the `customContextMenuSelect()`method.

### Add Custom Option

The following code shows how to add custom option in context menu.

```ts
    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    viewer.documentLoad = function (args) {
        viewer.addCustomMenu(menuItems, false, false);
    }

    viewer.customContextMenuSelect = function (args) {
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                        window.open('http://google.com/search?q=' + content);
                    }
                }
                break;
            case 'lock_annotation':
                lockAnnotations(args);
                break;
            case 'unlock_annotation':
                unlockAnnotations(args);
                break;
            case 'read_only_true':
                setReadOnlyTrue(args);
                break;
            case 'read_only_false':
                setReadOnlyFalse(args);
                break;
            case 'formfield properties':
                break;
            default:
                break;
        }
    };
```

### Customize custom option in context menu

The PDF Viewer feature enables customization of custom options and the ability to toggle the display of the default context menu. When the addCustomMenu parameter is set to `true`, the default menu is hidden; conversely, when it is set to `false`, the default menu items are displayed.

```ts

 let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    viewer.documentLoad = function (args) {
        viewer.addCustomMenu(menuItems, true);
    }
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the `customContextMenuBeforeOpen()` method.

```ts

    let viewer: PdfViewer = new PdfViewer();
    viewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    viewer.resourceUrl = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
    var menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];

    viewer.documentLoad = function (args) {
        viewer.addCustomMenu(menuItems, false);
    }

    viewer.customContextMenuSelect = function (args) {
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                        window.open('http://google.com/search?q=' + content);
                    }
                }
                break;
            case 'lock_annotation':
                lockAnnotations(args);
                break;
            case 'unlock_annotation':
                unlockAnnotations(args);
                break;
            case 'read_only_true':
                setReadOnlyTrue(args);
                break;
            case 'read_only_false':
                setReadOnlyFalse(args);
                break;
            case 'formfield properties':
                break;
            default:
                break;
        }
    };

    viewer.customContextMenuBeforeOpen = function (args) {
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            if (search) {
                search.style.display = 'none';
                if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                    search.style.display = 'block';
                } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                    var isLockOption = args.ids[i] === "lock_annotation";
                    for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                        var selectedAnnotation: any = viewer.selectedItems.annotations[j];
                        if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                            var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                            search.style.display = shouldDisplay ? 'block' : 'none';
                        }
                    }
                } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
                    var isReadOnlyOption = args.ids[i] === "read_only_true";
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                    search.style.display = displayMenu ? 'block' : 'none';
                } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                    search.style.display = 'block';
                }
            }
        }
    };

    function lockAnnotations(args) {
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = true;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    }

    function unlockAnnotations(args) {
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = false;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    }

    function setReadOnlyTrue(args) {
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectFormFields = selectedFormFields[i];
            if (selectFormFields) {
                viewer.formDesignerModule.updateFormField(selectFormFields, {
                    isReadOnly: true,
                });
            }
            args.cancel = false;
        }
    }

    function setReadOnlyFalse(args) {
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectFormFields = selectedFormFields[i];
            if (selectFormFields) {
                viewer.formDesignerModule.updateFormField(selectFormFields, {
                    isReadOnly: false,
                });
            }
            args.cancel = false;
        }
    }

```
The following is the output of custom context menu with customization. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/custom-context-menu/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/custom-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**,
Add the below `serviceUrl` in the `index.ts` file
`pdfviewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';`  

{% previewsample "page.domainurl/code-snippet/pdfviewer/custom-context-menu" %}