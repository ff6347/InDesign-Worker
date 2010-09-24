
#include "utilities/prefixNumber.jsx";


var printPreset = "PRINT";
var filenameSuffix = "_PRINT";

var preset = app.printerPresets.itemByName(printPreset);
try {
	preset.name;
} catch (error) {
	alert("There's no Print Preset named " + printPreset + ".");
}

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {
	var doc = docs.item(d);

	doc.printPreferences.activePrinterPreset = preset;

	var pageCount = doc.pages.count();
	for (var p = 0; p < pageCount; p++) {
		
		var page = doc.pages.item(p);
		
		var pageNo = page.name;
		doc.printPreferences.pageRange = pageNo;
		
		doc.printPreferences.printFile = File(doc.fullName.path + "/" + prefixNumber(pageNo) + filenameSuffix + ".ps");
		doc.print(false);
	}
}

