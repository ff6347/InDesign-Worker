
#include "isTemplate.jsx";


function checkOutStories (doc) {
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	var assignments = doc.assignments;
	
	for (var a = 0; a < assignments.count(); a++) {
		
		var assignment = assignments.item(a);
		
		//if (assignment.filePath == "") continue; // nieprzydzielona zawartość incopy
	
		var available = false;

		var assignedStories = assignment.assignedStories;
		var assignedStoriesCount = assignedStories.count();
		
		for (var as = 0; as < assignedStoriesCount; as++) {
			var assignedStory = assignedStories.item(as);
			var story = assignedStory.storyReference;
			available = story.checkOut();
		}
	
		if (!available) {
			alert("Assignment \"" +  assignment.name + "\" is being used by " + assignment.userName + ".");
		}
	
	}
	
}
