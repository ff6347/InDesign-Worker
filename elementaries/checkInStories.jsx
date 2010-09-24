
function checkInStories (doc) {
	
	// only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		
		//if (assignment.filePath == "") continue; // nieprzydzielona zawartość incopy
	
		var assignedStories = assignment.assignedStories;
		var assignedStoriesCount = assignedStories.count();
		
		for (var as = 0; as < assignedStoriesCount; as++) {
			
			var assignedStory = assignedStories.item(as);
			var story = assignedStory.storyReference;
			
			if (story.lockState == LockStateValues.CHECKED_OUT_STORY) {
				story.checkIn();
			}
		
		}
	
	}
	
}
