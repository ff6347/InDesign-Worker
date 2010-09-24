
#targetengine "session"
#strict on
#script "activate workflow"

#include "elementaries/exportPDF.jsx"
#include "elementaries/updateLinks.jsx"
#include "elementaries/updateAssignments.jsx"
#include "elementaries/checkOutStories.jsx"
#include "elementaries/checkInStories.jsx"
#include "elementaries/createAssignment.jsx"


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
	
}

function beforeClose (event) {
	
	var doc = event.target;
	exportPDF(doc, "PDF", "[Najmniejszy rozmiar pliku]");
	checkInStories(doc);
	updateAssignments(doc);
	updateLinks(doc);
	
}