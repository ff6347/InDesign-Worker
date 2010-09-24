
var refAttribute = "ref";

var doc = app.activeDocument;

// tag stories, they are necessary in XML tree and parent to hiperlinks

var stories = doc.stories;
var storiesCount = stories.count();

for (var s = 0; s < storiesCount; s++) {
	var story = stories.item(s);
	try {
		story.autoTag();
	} catch (e) {}
}

// subsequently process and remove hyperlinks

var hyperlinks = doc.hyperlinks;
while (hyperlinks.count() > 0) {
	var hyperlink = hyperlinks.firstItem();
	var syntax = hyperlink.destination.destinationURL.split(":");
	var protocol = syntax[0].toLowerCase();
	var value = syntax[1].toLowerCase();
	
	// try to add a tag if it does not exist
	try {
		doc.xmlTags.add(protocol);
	} catch (error) {}

	// create a tag for the hyperlink and assign attributes
	var linkText = hyperlink.source.sourceText;
	var tag = linkText.parentStory.associatedXMLElement.xmlElements.add(doc.xmlTags.itemByName(protokol), linkText);
	tag.xmlAttributes.add(refAttribute, value);
	
	// remove hyperlink
	hyperlink.remove();
}
