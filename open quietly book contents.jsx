
var book = app.activeBook;
var docs = book.bookContents;

for (var d=0; d < docs.count(); d++) {
	var doc = docs.item(d);
	app.open(File(doc.fullName), false);
}
