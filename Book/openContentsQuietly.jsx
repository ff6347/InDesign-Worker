
function openContentsQuietly (book) {
	
	var docs = book.bookContents;
	var docsCount = docs.count();
	
	for (var d=0; d < docsCount; d++) {
		var doc = docs.item(d);
		app.open(File(doc.fullName), false);
	}

}
