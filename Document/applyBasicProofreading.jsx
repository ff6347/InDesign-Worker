

function applyBasicProofreading (doc, useSelectionIfAny) {

	// if no document given, use the frontmost
	if (!doc) doc = app.activeDocument;

	if (!useSelectionIfAny) {
		changeGrepForElement(doc);
		return;	
	}
	
	var selection = doc.selection;

	if (selection == NothingEnum.nothing) return;
	
	if (selection.length == 0 || (selection.length == 1 && selection[0] instanceof InsertionPoint)) {
		changeGrepForElement(doc);
		return;
	}
	
	for (var s = 0; s < selection.length; s++) {
		var selectedObject = selection[s];
		var selectedElements = selectedObject.getElements();
		for (var e = 0; e < selectedElements.length; e++) {
			var selectedElement = selectedElements[e]; 
			changeGrepForElement(selectedElement);
		}
	}
	
	
}

function changeGrepForElement (element) {

	// correct double or triple dot to ellipsis
	app.findGrepPreferences.findWhat = "[.]{2,3}";
	app.changeGrepPreferences.changeTo = "…";
	element.changeGrep();
	

	// correct multiple spaces to single
	app.findGrepPreferences.findWhat = "[ ]{2,}";
	app.changeGrepPreferences.changeTo = " ";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(~S? +)";
	app.changeGrepPreferences.changeTo = " ";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "( +~S?)";
	app.changeGrepPreferences.changeTo = " ";
	element.changeGrep();
	

	// fix common errors with the bracketed ellipsis
	app.findGrepPreferences.findWhat ="(\\w) ([(]…[)])(?=(\\r|,|[.]|$))";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();

	app.findGrepPreferences.findWhat ="(?<=[,;.]) (\\(…\\)) (?=\\w)";
	app.changeGrepPreferences.changeTo = " $1~S";
	element.changeGrep();

	app.findGrepPreferences.findWhat ="(?<=^)(\\(…\\)) (?=\\w)";
	app.changeGrepPreferences.changeTo = "$1~S";
	element.changeGrep();

	app.findGrepPreferences.findWhat =" (\\(…\\))$";
	app.changeGrepPreferences.changeTo = "~S$1";
	element.changeGrep();
	

	// remove trailing whitespace at the end of paragraph
	app.findGrepPreferences.findWhat = "\\s+$";
	app.changeGrepPreferences.changeTo = "";
	element.changeGrep();
	

	// remove trailing whitespace at the begining of paragraph
	app.findGrepPreferences.findWhat = "^\\s+";
	app.changeGrepPreferences.changeTo = "";
	element.changeGrep();


	// correct hyphen between spaces to en-dash
	app.findGrepPreferences.findWhat = "(\\s)(-|~~)(\\s)";
	app.changeGrepPreferences.changeTo = "$1~=$3";
	element.changeGrep();


	// change interword hyphen to non-breaking hyphen
	app.findGrepPreferences.findWhat = "(?<=[[:alnum:]])\u002D(?=[[:alnum:]])";
	app.changeGrepPreferences.changeTo = "~~";
	element.changeGrep();


	// correct hyphen to en-dash between digits
	app.findGrepPreferences.findWhat = "(\\<\\d\\d)~~(\\d\\d\\d\\>)";
	app.changeGrepPreferences.changeTo = "$1-$2";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(?<!~~|-)(\\<\\d+)~~(\\d+\\>)(?!~~|-)";
	app.changeGrepPreferences.changeTo = "$1~=$2";
	element.changeGrep();
	

	// correct hyphen to en-dash between digits with following dots
	app.findGrepPreferences.findWhat = "(\\d+[.])(-|~~)(\\d+[.])";
	app.changeGrepPreferences.changeTo = "$1–$3";
	element.changeGrep();


	// change space to non-breaking space before trailing digit
	app.findGrepPreferences.findWhat = "(\\w+) (\\d+)(?=[.]\\s\\u)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();


	// correct double hyphen to en-dash
	app.findGrepPreferences.findWhat = "--";
	app.changeGrepPreferences.changeTo = "–";
	element.changeGrep();


	// insert thin space between sections of digits 
	app.findGrepPreferences.findWhat = "(\\d{1,3})(?=(\\d\\d\\d)+\\>)";
	app.changeGrepPreferences.changeTo = "$1~<";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(?<!\\d)(\\d)(~<)(\\d\\d\\d)(?!\\d)";
	app.changeGrepPreferences.changeTo = "$1$3";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(?<!\\d)(\\d)(\\d\\d\\d~<)";
	app.changeGrepPreferences.changeTo = "$1~<$2";
	element.changeGrep();

	
	// keep some common abbreviations with the following word
	app.findGrepPreferences.findWhat = "(?i)(?<![.])(\\<)(fig[.]|[aiouwzn]|tj[.]|tzn[.]|tzw[.]|o[.]|ks[.]|prof[.]|dr|dr[.]|n[.]|hab[.]|inż[.]|mgr|lek[.]|doc[.]|ds.|ku|np.|ok.|od|we|ze|że|s[.]|p[.]|str[.]|tom|t[.]|art[.]|ust[.]|im[.]|ul[.]|iż|ów[.]|pl[.]|fot[.]|tab[.]|rys[.]|ryc[.]|fig[.])( )";
	app.changeGrepPreferences.changeTo = "$2~S";
	element.changeGrep();
	

	// keep some common abbreviations with the preceding word
	app.findGrepPreferences.findWhat = "( )(µg|ppm|pmol|nmol|ng|mmol|µmol|cl|cm|dl|dm|g|h|kg|km|l|m|mg|ml|kcal|mm|t|zł|PLN|mU|ms)(\\>|\\d)";
	app.changeGrepPreferences.changeTo = "~S$2$3";
	element.changeGrep();


	// keep the plus sign with the righthand element
	app.findGrepPreferences.findWhat = "( )([+])( )";
	app.changeGrepPreferences.changeTo = "$1$2~S";
	element.changeGrep();


	// fix common errors with the "mm Hg" unit
	app.findGrepPreferences.findWhat = "(\\d) (mm)(Hg)";
	app.changeGrepPreferences.changeTo = "$1~S$2~S$3";
	element.changeGrep();


	// keep the ordinal with the following word
	app.findGrepPreferences.findWhat = "(\\d[.])( )(\\l)";
	app.changeGrepPreferences.changeTo = "$1~S$3";
	element.changeGrep();
	

	// keep the "br." abbreviation with the preceding date
	app.findGrepPreferences.findWhat = "(\\l) (br[.])";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();
	

	// keep the "nr" abbreviation with the following number 
	app.findGrepPreferences.findWhat = "(\\<nr) (\\d)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();


	// keep initials together
	app.findGrepPreferences.findWhat = "( \\u[.]) (\\u\\l\\l)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "([.]\\s\\u[.]) (\\u)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(\\u\\l+)( \\u[.])~S(\\u\\l\\l)";
	app.changeGrepPreferences.changeTo = "$1$2 $3";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(\\s\\u[.]\\u[.]) (\\u\\l\\l)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();
	

	// remove space before parenthesis and punctuation
	app.findGrepPreferences.findWhat = "( )([!\\%\\)\\}\\]:;,.?])";
	app.changeGrepPreferences.changeTo = "$2";
	element.changeGrep();


	// remove space after parenthesis
	app.findGrepPreferences.findWhat = "(//(//{//[)( )";
	app.changeGrepPreferences.changeTo = "$1";
	element.changeGrep();


	// keep "et al" together
	app.findGrepPreferences.findWhat = "(\\<et) (al)";
	app.changeGrepPreferences.changeTo = "$1~S$2";
	element.changeGrep();


	// fix common errors with the multiply sign
	app.findGrepPreferences.findWhat = "(?<=\\d)( |~S)*(×|x)( |~S|[/])";
	app.changeGrepPreferences.changeTo = "~<×$3";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "(\\s|[/])(×|x)( |~S)*(?=\\d)";
	app.changeGrepPreferences.changeTo = "$1×~<";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "( |~S|~<)(×)( |~S|~<)";
	app.changeGrepPreferences.changeTo = "~<×~<";
	element.changeGrep();


	// correct false inequality sings
	app.findGrepPreferences.findWhat = "([=][>]|[>][=])";
	app.changeGrepPreferences.changeTo = "≥";
	element.changeGrep();

	app.findGrepPreferences.findWhat = "([=][<]|[<][=])";
	app.changeGrepPreferences.changeTo = "≤";
	element.changeGrep();

}