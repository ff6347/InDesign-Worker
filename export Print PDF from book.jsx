
#include "utilities/prefixNumber.jsx";


var preset = "PRINT";
var path = "PRINT";

// check the existence of given preset
preset = app.pdfExportPresets.itemByName(preset);
try {
	preset.name;
} catch (error) {
	alert("There's no PDF Export Preset named " + preset + ".");
}

var book = app.activeBook;

var bookContents = book.bookContents;
var firstPage = bookContents.firstItem().documentPageRange.split("-")[0];
var lastDocPageRange = bookContents.lastItem().documentPageRange.split("-");
var lastPage = lastDocPageRange[lastDocPageRange.length-1];

var URI = book.fullName.path + "/" + path + "/" + prefixNumber(firstPage) + "-" + prefixNumber(lastPage) + "_" + book.name.replace(/\.indb$/i, ".pdf");

try {
	book.exportFile(File(URI), false, preset);
} catch (error) {
	alert(error.description);
	
	/* amazingly, this does not work
	if (doc.fullName.parent.create(path)) {
		doc.exportFile(ExportFormat.PDF_TYPE, File(URI));
	} else {
		alert("Can't create the " + path + " folder");
	}
	*/
	
}
