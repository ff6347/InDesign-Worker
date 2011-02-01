
#include "../utilities/prefixNumber.jsx";
#include "isTemplate.jsx";


function paginateFilename (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't paginate filename for never being saved document: " + doc.name);
		return;
	}
	
	var pageNo = parseInt(doc.pages.firstItem().name);
	var pagination = prefixNumber(pageNo) + "_";
	
	// check if filename is already paginated
	if (doc.name.search(pagination) == 0) 
		return doc;

	var newFilename = pagination + doc.name;
	var oldURI = doc.fullName;
	var newURI = oldURI.path + "/" + newFilename;
	var isVisible = doc.visible;
	
	doc.close();
	
	try {

		File(oldURI).rename(newFilename);
		doc = app.open(File(newURI), isVisible);

	} catch (error) {
		alert(error.description);
		doc = app.open(File(oldURI), isVisible);
		
	}
	
	return doc;

}
