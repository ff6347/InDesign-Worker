
#include "isTemplate.jsx";


function unlinkBrokenLinks (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	var links = doc.links;
	var linksCount = links.count();
	
	// loop in reverse, because links being unlinked are removed from collection
	for (var l = linksCount - 1; l >= 0; l--) {
		
		var link = links.item(l);
		
		if (link.status == LinkStatus.LINK_MISSING) {
			link.unlink();
		}
		
	}
	
}
