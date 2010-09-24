
var indexTagName = "index";

var doc = app.activeDocument;

// subsequently process nodes

treeRecurence(doc.xmlElements.firstItem());

function treeRecurence (node) {
	
	var childNodes = node.xmlElements;
	
	if (node.markupTag.name == indexTagName) {
		
		var atts = node.xmlAttributes;
		var attsCount = atts.count();
		
		for (var a = 0; a < attsCount; a++) {
			
			var att = atts.item(a);
			
			var topics = doc.indexes.firstItem().topics;
			var topic = topics.add(att.value);
			topic.pageReferences.add(node.texts.firstItem());
			
		}
		
	}
	
	var childNodesCount = childNodes.count();
	
	if (childNodesCount == 0) return;
	
	for (var n = 0; n < childNodesCount; n++) {
		treeRecurence(childNodes.item(n));
	}
	
}
