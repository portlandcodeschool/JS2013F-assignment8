function isEven (num) {
	if (num % 2 === 0) {
  		return true;
	} else {
		return false;
	}
};

function isBeep (str) {
	if (str === "beep") {
		return true;
	} else {
		return false;
	}
};
 


module.exports.isEven = isEven;
module.exports.isBeep = isBeep;