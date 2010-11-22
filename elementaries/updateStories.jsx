
function updateStories (doc) {

	// check only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		var assignedStories = assignment.assignedStories;
		var assignedStoriesCount = assignedStories.count();
	
		// loop in reverse, because assigned stories when updated are kinda readded to collection, thus moved to bottom
		for (var s = assignedStoriesCount - 1; s >= 0; s--) {
			
			var assignedStoryLink = assignedStories.item(s).storyReference.itemLink;
			
			if (assignedStoryLink.status == LinkStatus.LINK_OUT_OF_DATE) {
				assignedStoryLink.update();
			}
		
		}
	
	}

}
