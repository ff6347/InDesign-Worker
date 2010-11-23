
#include "Document/removeRGBColors.jsx"


var replaceWith = "Black";

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	removeRGBColors(doc, replaceWith);

}
