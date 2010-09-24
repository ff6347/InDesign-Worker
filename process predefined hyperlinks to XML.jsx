
var predefinedTags = ["ryc", "film", "tab", "http", "lek", "link"];

var doc = app.activeDocument;

// tag stories, they are necessary in XML

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
	
	// filter protocol
	
	switch (protocol) {
		case "ryc":
		case "film":
		case "tab":
		case "http":
		case "lek":
		case "link":
			try {
				doc.xmlTags.add(protocol);
			} catch (error) {}
			break;
		default:
		
			/* under construction
			var dialogBox = app.dialogs.add({name: "Unknown tag", canCancel: false});
			with (dialogBox.dialogColumns.add()) {
				with (dialogRows.add()) {
					staticTexts.add({staticLabel: "Encountered unknown tag: " + protocol + "."});
				}
				with (dialogRows.add()) {
					with (dialogBox.dialogColumns.add()) {
						var choice = radiobuttonGroups.add();
						choice.radiobuttonControls.add({staticLabel: "Add as new: ", checkedState: true});
						choice.radiobuttonControls.add({staticLabel: "Replace with predefined: "});
					}
					with (dialogBox.dialogColumns.add()) {
						textEditboxes.add({editContents: protocol.toLowerCase(), minWidth: 72});
						var predefined = dropdowns.add({stringList: predefinedTags, selectedIndex: 0});
					}
				}
			}
			
			var result = dialogBox.show();
			if (result) {
				try {
					doc.xmlTags.add(predefinedTags[predefined.selectedIndex]);
				} catch (error) {}
			} else {
				predefinedTags.push();
				try {
					doc.xmlTags.add();
				} catch (error) {}
			}
			dialogBox.destroy();
			*/
			
	}

	// create tag for hyperlink with its attributes
	
	var linkText = hyperlink.source.sourceText;
	var tag = linkText.parentStory.associatedXMLElement.xmlElements.add(doc.xmlTags.itemByName(protocol), linkText);
	tag.xmlAttributes.add("ref", value);
	
	// usuń hyperlink
	
	hyperlink.remove();
	
}
