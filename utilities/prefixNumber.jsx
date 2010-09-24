
function prefixNumber (number) {
	number = parseInt(number);
	return (number < 10 ? "00" : (number < 100 ? "0" : "")) + number;
}
