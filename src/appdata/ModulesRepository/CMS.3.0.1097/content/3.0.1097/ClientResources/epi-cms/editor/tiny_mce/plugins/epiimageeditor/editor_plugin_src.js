(function(tinymce,$){var imageNode;tinymce.create("tinymce.plugins.epiimageeditor",{init:function(ed){ed.addCommand("mceEPiImageEditor",function(){if(-1==ed.dom.getAttrib(ed.selection.getNode(),"class").indexOf("mceItem")){var sizeIsSpecified,selectedNode=imageNode,imgSrc=ed.dom.getAttrib(selectedNode,"src");if(imgSrc){var onDialogComplete=function(returnData){if(returnData){var queryString='img[src^="'+imgSrc+'"]',imgNodes=ed.dom.select(queryString);ed.getWin().focus(),sizeIsSpecified&&(ed.dom.setAttrib(imgNodes,"width",returnData.actualWidth),ed.dom.setAttrib(imgNodes,"height",returnData.actualHeight)),ed.dom.setAttrib(imgNodes,"src",returnData.src),ed.undoManager.add()}ed.windowManager.onClose.dispatch()},dialogFeatures={width:ed.getParam("epiImageEditor_dialogWidth"),height:ed.getParam("epiImageEditor_dialogHeight")},dialogArguments={};dialogArguments.src=imgSrc,sizeIsSpecified=ed.dom.getAttrib(selectedNode,"width"),ed.settings.epi_page_context.src=imgSrc;var dialogURL=EPi.ResolveUrlFromUI("Edit/ImageEditor/ImageEditor.aspx?")+$.param(ed.settings.epi_page_context);ed.windowManager.onOpen.dispatch(),ed.windowManager.open({url:dialogURL,width:dialogFeatures.width,height:dialogFeatures.height,onCallback:onDialogComplete,dialogArguments:dialogArguments})}}}),ed.addButton("epiimageeditor",{title:"epiimageeditor.epiimageeditor_desc",cmd:"mceEPiImageEditor","class":"mce_epiimageeditor"}),ed.onNodeChange.add(function(ed,cm,n){var isStandardImage="IMG"===n.nodeName&&-1===ed.dom.getAttrib(n,"class").indexOf("mceItem");cm.setActive("epiimageeditor",isStandardImage),cm.setDisabled("epiimageeditor",!isStandardImage),imageNode=isStandardImage?n:null})},createControl:function(){return null},getInfo:function(){return{longname:"EPiServer CMS Image Editor Plug-in",author:"EPiServer AB",authorurl:"http://www.episerver.com",infourl:"http://www.episerver.com",version:"1.0"}}}),tinymce.PluginManager.add("epiimageeditor",tinymce.plugins.epiimageeditor)})(tinymce,epiJQuery);