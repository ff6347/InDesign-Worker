
function updateLinks (doc) {

	// check only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var links = doc.links;
	
	for (var l = 0; l < links.count(); l++) {
		
		var link = links.item(l);
		
		if (link.status == LinkStatus.LINK_OUT_OF_DATE) {
			link.update();
		}
	
	}

}
