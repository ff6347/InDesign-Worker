
#include "isTemplate.jsx";


function removeRGBColors (doc, replaceWith) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;

	// give up the templates
	if (isTemplate(doc)) return;
	
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
