
#targetengine "session"
#strict on
#script "activate workflow"

#include "Document/exportPDF.jsx"
#include "Document/updateLinks.jsx"
#include "Document/updateAssignments.jsx"
#include "Document/checkOutStories.jsx"
#include "Document/checkInStories.jsx"
#include "Document/createAssignment.jsx"
#include "Document/exportStories.jsx"
#include "Document/updateStories.jsx"


app.eventListeners.add("afterOpen", afterOpen, false);
app.eventListeners.add("afterSaveAs", afterSaveAs, false);
app.eventListeners.add("beforeClose", beforeClose, false);

function afterOpen (event) {
	
	var doc = event.target;
	updateAssignments(doc);
	checkOutStories(doc);
	
}

function afterSaveAs (event) {
	
	var doc = event.target;
	createAssignment(doc, "ASSIGNMENTS");
	updateAssignments(doc);
	exportStories(doc, "ASSIGNMENTS/INCX");
	updateStories(doc);
	
}

function beforeClose (event) {
	
	var doc = event.target;
	exportPDF(doc, "PDF", "[Najmniejszy rozmiar pliku]");
	checkInStories(doc);
	updateAssignments(doc);
	updateLinks(doc);
	
}