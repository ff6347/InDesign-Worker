
#include "../utilities/prefixNumber.jsx";


function exportJPG (doc, path, resolution, spreads) {
	
	// only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	if (!doc.saved) {
		alert("Can't export JPG for never being saved document.");
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
					
		app.jpegExportPreferences.pageString = page.name;
		
		var fileURI = doc.fullName.path + "/" + path +"/" + prefixNumber(page.name) + "_" + doc.name.replace(/\.indd$/i, ".jpg");
		
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
