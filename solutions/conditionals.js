function isEven (num) {

	if (num % 2 === 0) {
		return true; 
	} else {
		return false;
	}


}

function isBeep (str) {

	if (str === "beep") {
		return true;
	} else {
		return false;
	}


  // implement me!

  return str;
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;