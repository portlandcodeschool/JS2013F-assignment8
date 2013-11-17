module.exports.factorial = function factorial (num) {

if (num < 0 || num !== Math.floor(num))
	return undefined;

var result = 1;
  for(; num > 1; num--) {
  	result *= num; 
  } 
  return result;
 };

  

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {
	var result = "";
	if (str[i] = [a-z]) {
	  for(var i = 0; i < str.length - 1; i += 2) {
			//going two characters at a time, so need an if statement for if it has an odd number of characters
		result += str[i].toLowerCase();
		result += str[i + 1].toUpperCase();
	  }

	  if (i === str.length - 1) {
		result += str[i].toLowerCase();
	  }
  	  return result;
	} else {
		result += str[i];
	}
};	

module.exports.capitalizeVowels = function capitalizeVowels (str) {

  var newArray = "";

  for(var i = 0; i <= str.length - 1; i++) {

    if (str[i] === "a") {
      newArray += str[i].toUpperCase();
	} else if (str[i] === "e") {
	  newArray += str[i].toUpperCase();
	} else if (str[i] === "i") {
	  newArray += str[i].toUpperCase();
	} else if (str[i] === "o") {
	  newArray += str[i].toUpperCase();
	} else if (str[i] === "u") {
	  newArray += str[i].toUpperCase();	
	} else {
	  newArray += str[i];
	}	
  }  
return newArray;
};


module.exports.isPalindrome = function isPalindrome (str) {

  var reverseStr = "";

  
  	for (var i = str.length - 1; i >= 0; i--) {
  	reverseStr += str[i];
   	};
    
    trueFalse();
    return reverseStr;


    function trueFalse (str, reverseStr) {
      if (str === reverseStr) {
		console.log(true);     
	  } else {
		console.log(false)      
	  }
    };  

};
