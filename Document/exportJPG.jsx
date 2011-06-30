
#include "../utilities/prefixNumber.jsx";
#include "isTemplate.jsx";


function exportJPG (doc, path, resolution, spreads) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't export JPG for never being saved document: " + doc.name);
		return;
	}

	app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
	app.jpegExportPreferences.resolution = resolution;
	app.jpegExportPreferences.exportingSpread = spreads;
	app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.MAXIMUM;
	app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;

	var pagesCount = doc.pages.count();
	
	for (var p = 0; p < pagesCount; p++) {
		
		var page = doc.pages.item(p);
					
		app.jpegExportPreferences.pageString = ((page.appliedSection.name.length > 0) ? page.appliedSection.name : "") + page.name;
		
		var pagination = isNaN(parseInt(page.name)) ? page.name : prefixNumber(page.name);
		
		var fileURI = doc.fullName.path + "/" + path +"/" + pagination + "_" + doc.name.replace(/\.indd$/i, ".jpg");
		
		try {
			doc.exportFile(ExportFormat.JPG, File(fileURI));
		} catch (error) {
			alert(error.description + "\rPress OK to continue exporting remaining documents");

			/* amazingly, this does not work
			if (doc.fullName.parent.create(folderName)) {
				doc.exportFile(ExportFormat.PDF_TYPE, File(fileURI));
			} else {
				alert("Can't create the " + folderName + " folder");
			}
			*/

		}
		
	}
	
}
