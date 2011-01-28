
#include "isTemplate.jsx";


function exportPackage (doc, path) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't export package for never being saved document: " + doc.name);
		return;
	}
	
	var URI = doc.fullName.path + "/" + path + "/" + doc.name.replace(/\.indd$/i, "");

	try {
		// package with fonts, linked graphics, profiles, updated links into package, ignoring preflight errors and with report
		doc.packageForPrint(File(URI), true, true, true, true, true, true);
	} catch (error) {
		alert(error.description);
	}

}
