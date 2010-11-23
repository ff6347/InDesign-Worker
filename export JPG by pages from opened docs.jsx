
#include "Document/exportJPG.jsx";


var path = "JPG"; // must be created manually
var resolution = 300 // between 1 and 2400
var spreads = false;

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	exportJPG(doc, path, resolution, spreads);
	
}
