
function exportPDF (doc, path, preset) {
	
	// only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	if (!doc.saved) {
		alert("Can't export PDF for never being saved document.");
		return;
	}
	
	// check the existence of given preset
	preset = app.pdfExportPresets.itemByName(preset);
	try {
		preset.name;
	} catch (error) {
		alert("There's no PDF Export Preset named " + preset + ".");
		return;
	}
	
	// export all pages
	app.pdfExportPreferences.pageRange = PageRange.ALL_PAGES;
	
	var URI = doc.fullName.path + "/" + path + "/" + doc.name.replace(/\.indd$/i, ".pdf");
	
	try {
		doc.exportFile(ExportFormat.PDF_TYPE, File(URI), false, preset);
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

}
