
function getCharacterCount (doc) {
	
	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;
	
	var stories = doc.stories;
	var storiesCount = stories.count();
	var charactersCount = 0;
	
	for (var s = 0; s < storiesCount; s++) {
		charactersCount += stories.item(s).characters.count();
	}

	return charactersCount;

}
