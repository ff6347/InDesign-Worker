
#include "isTemplate.jsx";


function updateLinks (doc) {

	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;

	// give up the templates
	if (isTemplate(doc)) return;
	
	var links = doc.links;
	var linksCount = links.count();
	
	// loop in reverse, because links when updated are kinda readded to collection, thus moved to bottom
	for (var l = linksCount - 1; l >= 0; l--) {
		
		var link = links.item(l);
		
		if (link.status == LinkStatus.LINK_OUT_OF_DATE) {
			link.update();
		}
	
	}

}
