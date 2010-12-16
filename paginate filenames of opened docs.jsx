
#include "Document/paginateFilename.jsx"


var docs =  app.documents;
var lastDoc = docs.count() - 1;

for (var d = lastDoc; d >= 0; d--) {

	var doc = docs.item(lastDoc);
	paginateFilename(doc);

}
