
function removeRGBColors (doc, replaceWith) {

	// check only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var colors = doc.colors;
	var replace = colors.itemByName(replaceWith);
	var colorsCount = colors.count();
	
	for (var c = 0; c < colorsCount; c++) {
		
		var color = colors.item(c);
		
		if (color.space == ColorSpace.RGB) {
			color.remove(replace);
		}
	
	}

}
