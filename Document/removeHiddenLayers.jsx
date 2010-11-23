
function removeHiddenLayers (doc) {

	// check only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var layers = doc.layers;
	var index = 0;
	
	while (index < layers.count()) {
		
 		var layer = layers.item(index);
		
		if (!layer.visible) layer.remove()
		else index++;
		
	}

}
