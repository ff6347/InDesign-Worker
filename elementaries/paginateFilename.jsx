
#include "../utilities/prefixNumber.jsx";


function paginateFilename (doc) {
	
	// only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	if (!doc.saved) {
		alert("Can't paginate filename for never being saved document.");
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

		/* amazingly, this does not work
		if (doc.fullName.parent.create(path)) {
			doc.exportFile(ExportFormat.PDF_TYPE, File(URI));
		} else {
			alert("Can't create the " + path + " folder");
		}
		*/
		
	}

}
