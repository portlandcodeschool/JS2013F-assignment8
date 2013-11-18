//module.exports.isPalindrome = function isPalindrome (str) {


  
  

  function isPalindrome (str) {
  
  var reverseStr = "";

  
  	for (var i = str.length - 1; i >= 0; i--) {
  	reverseStr += str[i];
   	};

    trueFalse();
    return reverseStr;

    


    function trueFalse () {
      if (str === reverseStr) {
		console.log(true);     
	  } else {
		console.log(false)      
	  }
    };  

};
isPalindrome("Hello World");


// function isPalindrome (str) {
//   if (str != reverseStr) {
//     return true;
//   } else {
// 	return false;
//   }
// };

//console.log(reverseStr);
// console.log(isPalindrome("abcba"));