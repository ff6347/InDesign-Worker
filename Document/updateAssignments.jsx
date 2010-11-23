
function updateAssignments (doc) {
	
	// check out only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		
		//if (assignment.filePath == "") continue; // nieprzydzielona zawartość incopy
		
		if (assignment.assignmentFileStatus == AssignmentStatus.ASSIGNMENT_OUT_OF_DATE) {
			assignment.update();
		}

	}
	
}
