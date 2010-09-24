
var indexTagName = "index";
var topicAttribute = "topic";

var doc = app.activeDocument;

if (doc.indexes.length != 0) {
	
	// add tag to list
	try {
		doc.xmlTags.add(indexTagName);
	} catch (error) {}

	var indexTopics = doc.indexes.firstItem().topics;
	
	for (var xe = 0; xe < indexTopics.length; xe++) {
		
		var topic = indexTopics.item(xe);
		var refs = topic.pageReferences;
		
		for (var ref = 0; ref < refs.length; ref++) {
			var topicText = refs.item(ref).sourceText;
			var topicKeyword = topicText.words.firstItem();
			var tag = topicKeyword.parentStory.associatedXMLElement.xmlElements.add(doc.xmlTags.itemByName(indexTagName), topicKeyword);
			tag.xmlAttributes.add(topicAttribute, topic.name);
		}
		
	}
}
