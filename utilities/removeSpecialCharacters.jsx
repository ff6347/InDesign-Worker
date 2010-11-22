
function removeSpecialCharacters (string) {
	
	var index = 0;
	while (index < string.length) {
		if (string.charCodeAt(index) < 32) 
			string = string.split(string.charAt(index)).join("")
		else 
			index++;
	}

	return string;
	
}
