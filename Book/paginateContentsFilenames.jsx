
#include "../Document/paginateFilename.jsx"


function paginateContentsFilenames (book) {
	
	// if no book given, use the frontmost
	if (!book) book = app.activeBook;
	
	// repaginate, just in case
	book.repaginate();
	
	var contents = book.bookContents;
	var contentsCount = contents.count();
	
	for (var c = 0; c <contentsCount; c++) {

		var content = contents.item(c);
		var doc = app.open(content.fullName, false);
		var paginatedDoc = paginateFilename(doc);

		// skip already paginated
		if (content.fullName.absoluteURI == paginatedDoc.fullName.absoluteURI) continue;
		
		// here's an InDesign CS3 API bug: no such method executes, just like the move, remove or even status
		// lack of the remove method makes it also impossible to do it other way around, sorry
		// this seems to be fixed in CS4, not tested though
		content.replace(paginatedDoc.fullName);
		
	}

}
