
#include "../utilities/removeSpecialCharacters.jsx";
#include "../PageItem/isPlacedOnMasterSpread.jsx";
#include "isTemplate.jsx";


function exportRTF (doc, path) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	// give up the templates
	if (isTemplate(doc)) return;
	
	if (!doc.saved) {
		alert("Can't export RTF for never being saved document: " + doc.name);
		return;
	}
	
	// export all doc's stories

	var stories = doc.stories;
	var storiesCount = stories.count();
	
	for (var s = 0; s < storiesCount; s++) {
		
		var story = stories.item(s);

		// continue if story's first text frame is on master spread
		var originContainer = story.textContainers[0];
		if (isPlacedOnMasterSpread(originContainer)) continue;
		
		// continue, because it's probably junk or fairly unimportant story
		if (story.length < 6 && story.tables.count() == 0) continue;

		var suffix = "";
		if (story.length < 6 && story.tables.count() > 0) 
			suffix = story.tables.firstItem().contents[0].substr(0, 10)
		else {
			suffix = story.words.firstItem().contents;

			// make no suffix if it's duplicating doc's name
			if (doc.name.search(suffix) >= 0) suffix = "";
		}
	
		// get rid of suffix's special characters
		suffix = removeSpecialCharacters(suffix);
		
		// construct URI
		var URI = doc.fullName.path + "/" + path + "/" + doc.name.replace(/\.indd$/i, "") + (suffix.length > 0 ? "_" + suffix : "") + ".rtf";

		// export file
		try {
			story.exportFile(ExportFormat.RTF, File(URI), false);
		} catch (error) {
			alert(error.description);
		}
	
	}

}
