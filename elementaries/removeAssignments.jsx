
function removeAssignments (doc) {
	
	var assignments = doc.assignments;
	var assignmentsCount = assignments.count();
	
	for (var a = 0; a < assignmentsCount; a++) {
		
		var assignment = assignments.item(a);
		
		try {
			assignment.remove();
		} catch (e) {};
		
	}
	
}