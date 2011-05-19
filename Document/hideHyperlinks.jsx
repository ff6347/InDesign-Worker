
#include "isTemplate.jsx";


function hideHyperlinks (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
    
    var hyperlinks = doc.hyperlinks;
    var hyperlinksCount = hyperlinks.count();
	
	for (var h = 0; h < hyperlinksCount; h++) {
	
		var hyperlink = hyperlinks.item(h);
        hyperlink.visible = false;
	
	}
	
}