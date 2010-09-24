
var docs = app.documents;

while (docs.count() > 0) {
	
	var doc = docs.firstItem();
	doc.close(SaveOptions.YES);
	
}
