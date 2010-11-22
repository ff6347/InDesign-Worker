
#include "elementaries/updateAssignments.jsx"
#include "elementaries/updateStories.jsx"


var docs =  app.documents;
var docCount = docs.count();

for (var d=0; d < docCount; d++) {
	
	var doc = docs.item(d);
	updateAssignments(doc);
	updateStories(doc);
	
}
