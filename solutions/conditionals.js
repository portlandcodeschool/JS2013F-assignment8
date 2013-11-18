function isEven (num) {

	return num % 2 === 0;
 
}

function isBeep (str) {

	if (str === "beep") {
		return true;
	} else {
		return false;
	}

}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;