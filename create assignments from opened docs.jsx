
#include "elementaries/createAssignment.jsx"


var path = "ASSIGNMENTS"

var docs =  app.documents;
var docCount = docs.count();

for (var d=0; d < docCount; d++) {
	
	var doc = docs.item(d);
	createAssignment(doc, path);

}
