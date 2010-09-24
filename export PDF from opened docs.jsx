
#include "elementaries/exportPDF.jsx"


var path = "PDF"; // must be created manually
var preset = "[Najmniejszy rozmiar pliku]";

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	exportPDF(doc, path, preset);

}
