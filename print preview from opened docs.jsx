
var presetName = "PREVIEW";

var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {
	var doc = docs.item(d);
	doc.print(false, app.printerPresets.itemByName(presetName));
}
