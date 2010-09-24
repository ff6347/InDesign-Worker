
function unlinkBrokenLinks (doc) {
	
	var links = doc.links;
	var linksCount = links.count();
	
	var toUnlink = new Array();
	
	for (var l = 0; l < linksCount; l++) {
		
		var link = links.item(l);
		
		if (link.status == LinkStatus.LINK_MISSING) {
			toUnlink.push(link);
		}
		
	}
	
	for (var u = 0; u < toUnlink.length; u++) {
		toUnlink[u].unlink();
		//alert(toUnlink[u].status  == LinkStatus.LINK_MISSING);
	}
	
}
