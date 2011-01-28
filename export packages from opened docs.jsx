
#include "Document/exportPackage.jsx"


var path = "PACKAGES"; // must be created manually

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	exportPackage(doc, path);

}
