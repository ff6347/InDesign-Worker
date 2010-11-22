
function removeAssignments (doc) {
	
	var assignments = doc.assignments;
	var assignmentsCount = assignments.count();
	
	// loop in reverse, because links being unlinked are removed from collection
	for (var a = assignmentsCount - 1; a >= 0; a--) {
		
		var assignment = assignments.item(a);
		
		try {
			assignment.remove();
		} catch (e) {};
		
	}
	
}