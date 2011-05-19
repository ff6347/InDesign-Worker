
#include "isTemplate.jsx";


function removeHyperlinks (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
    
    var hyperlinks = doc.hyperlinks;
    
    while (hyperlinks.count() > 0) {
        
        var hyperlink = hyperlinks.firstItem();
        
        // remove hyperlink
        hyperlink.remove();
    }

}