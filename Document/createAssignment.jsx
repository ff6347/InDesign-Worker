
#include "isTemplate.jsx";


function createAssignment (doc, path) {
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't create assignments for never being saved document: " + doc.name);
		return;
	}
	
	var assignments = doc.assignments;
	var assignment = assignments.itemByName(doc.name.replace(/\.indd$/i, ""));
	
	try {
		assignment.name;
	} catch (error) {
		
		var URI = doc.fullName.path + "/" + path + "/" + doc.name.replace(/\.indd$/i, ".inca");
		assignment = assignments.add(File(URI));
		assignment.exportOptions = AssignmentExportOptions.EVERYTHING;
	
	}

}
