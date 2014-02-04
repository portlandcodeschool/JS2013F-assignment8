module.exports.factorial = function factorial (num) {

 if (num < 0 || num !== Math.floor(num))
 	return undefined;

 var result = 1;
 
 for (/*blank*/; num > 1; num --) {
 	result *=num;
 }

  return result;
}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) { 
	
	var output = "";
	var capFlag = false;

	for (var i = 0; i < str.length; i += 1) {
		if (/[a-zA-Z]/.test(str[i])) {
			if (capFlag === true) {
				output = output + str[i].toUpperCase();
				capFlag = false;
			} else {
				capFlag = true;
				output = output + str[i].toLowerCase();
			}
		} else {
		   output = output + str[i];
		}
	}

  return output;
}


module.exports.capitalizeVowels = function capitalizeVowels (str) {

var outputString = "";


	for (var i = 0; i < str.length; i += 1) {
		 switch (str[i]) {
		 	case "a":
		 	case "A":
		 	case "e":
		 	case "i":
		 	case "I":
			case "o":
		 	case "O":
		 	case "u":
		 	case "U":
				 outputString = outputString + str[i].toUpperCase();
				break;

			default: 
			outputString = outputString + str[i];
			break;
		}
	}
	return outputString;
}

module.exports.isPalindrome = function isPalindrome (str) {

  if (str.split("").reverse().join("") === str) {
  	return true;
  } else {
  	return false;
  }
  
} 
