	
function createAssignment (doc, path) {
	
	// only the documents, not the templates
	if (doc.name.search(/\.indd$/i) == -1) return;
	
	if (!doc.saved) {
		alert("Can't create assignments for never being saved document.");
		return;
	}
	
	var assignments = doc.assignments;
	var assignment = assignments.itemByName(doc.name.replace(/\.indd$/i, ""));
	
	try {
		assignment.name;
	} catch (error) {
		
		var URI = doc.fullName.path + "/" + path + "/" + doc.name.replace(/\.indd$/i, ".inca");
		assignment = assignments.add(File(URI));
		assignment.exportOptions = AssignmentExportOptions.EVERYTHING;
	
		/* amazingly, this does not work
		var stories = doc.stories;
		var storiesCount = stories.count() - 1; // decrease because of default assignment
		for (var s = 0; s < storiesCount; s++) {
			var story = stories.item(s);
			// if (story.textFrames.firstItem().parent instanceof MasterSpread) continue;
			if (story.contents.length == 0) continue;
			var assetURI = doc.fullName.path + "/" + folderName + "/INCX/" + doc.name.substr(0, 20).replace(/\.indd$/i, "") + "_" + story.contents.substr(0, 20) + ".incx";
			try {
				story.exportFile(ExportFormat.INCOPY_DOCUMENT, File(assetURI));
			} catch (error) {
				alert(error.description);
			}
		}
		*/
		
		assignment.update();
	
	}

}
