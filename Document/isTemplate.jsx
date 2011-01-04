
function isTemplate (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	return	(doc.name.search(/\.indt$/i) != -1);
	
}
