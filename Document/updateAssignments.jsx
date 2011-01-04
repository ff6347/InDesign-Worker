
#include "isTemplate.jsx";


function updateAssignments (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;	
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		
		//if (assignment.filePath == "") continue; // nieprzydzielona zawartość incopy
		
		if (assignment.assignmentFileStatus == AssignmentStatus.ASSIGNMENT_OUT_OF_DATE) {
			assignment.update();
		}

	}
	
}
