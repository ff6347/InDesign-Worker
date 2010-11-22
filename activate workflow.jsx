
#targetengine "session"
#strict on
#script "activate workflow"

#include "elementaries/exportPDF.jsx"
#include "elementaries/updateLinks.jsx"
#include "elementaries/updateAssignments.jsx"
#include "elementaries/checkOutStories.jsx"
#include "elementaries/checkInStories.jsx"
#include "elementaries/createAssignment.jsx"
#include "elementaries/exportStories.jsx"
#include "elementaries/updateStories.jsx"


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