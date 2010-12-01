
#include "../utilities/prefixNumber.jsx";
#include "isTemplate.jsx";


function paginateFilename (doc) {
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't paginate filename for never being saved document: " + doc.name);
		return;
	}
	
	var pageNo = parseInt(doc.pages.firstItem().name);
	var newFilename = prefixNumber(pageNo) + "_" + doc.name;
	var oldURI = doc.fullName;
	var newURI = oldURI.path + "/" + newFilename;
	var isVisible = doc.visible;
	
	doc.close();
	
	try {

		File(oldURI).rename(newFilename);
		app.open(File(newURI), isVisible);

	} catch (error) {
		alert(error.description);
	}

}
