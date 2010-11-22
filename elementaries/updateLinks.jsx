
function updateLinks (doc) {

	// check only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
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
