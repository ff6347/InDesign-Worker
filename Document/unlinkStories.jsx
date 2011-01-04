
#include "isTemplate.jsx";


function unlinkStories (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;

	// give up the templates
	if (isTemplate(doc)) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		var assignedStories = assignment.assignedStories;
		var assignedStoriesCount = assignedStories.count();
		
		// loop in reverse, because links being unlinked are removed from collection
		for (var s = assignedStoriesCount - 1; s >= 0; s--) {
			
			var assignedStoryLink = assignedStories.item(s).storyReference.itemLink;
			assignedStoryLink.unlink();
		
		}
	
	}

}
