
#include "isTemplate.jsx";


function removeHiddenLayers (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;

	// give up the templates
	if (isTemplate(doc)) return;
	
	var layers = doc.layers;
	var index = 0;
	
	while (index < layers.count()) {
		
 		var layer = layers.item(index);
		
		if (!layer.visible) layer.remove()
		else index++;
		
	}

}
