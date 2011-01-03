
#include "Document/getCharacterCount.jsx"


var totalCharacters = 0;

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	totalCharacters += getCharacterCount(doc);

}

alert("Total no. of characters: " + totalCharacters);
