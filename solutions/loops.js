module.exports.factorial = function factorial (num) {

  // implement me!
  // var answer = 0;
  // for(var i = 0; i <= num; ++i){

  // 	answer = answer + (i*num);

  // };

  if (num < 0 || num !== Math.floor(num)){
  	return undefined;};

  var result = 1;

  for (/* blank */; num > 1; num--){
  	result *= num;
  };

  //return answer;
  return result;
  //return null;
}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {

  var array = str.split("");
  var leetspeak = [];
  var alt = 1;

  for(var i = 0; i <= array.length - 1; ++i){
  	
  	if(/[a-zA-z]/.test(array[i])){

      if(alt == 1){
        leetspeak.push(array[i].toLowerCase());
        alt = 2;
      } else if(alt == 2){
        leetspeak.push(array[i].toUpperCase());
        alt = 1;
      };

    } else{
      leetspeak.push(array[i]);
    };

  };
  
  return leetspeak.join("");
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {

 var array = str.split("");
 var result = [];
 var vowels = ["a", "e", "i", "o", "u", "y"];

  function isVowel (letter) {
    for(var x = 0; x <= vowels.length - 1; ++x){
      if(letter == vowels[x]){
        return true;
      };
    };      
  };


  for(var i = 0; i <= array.length - 1; ++i){

    if(isVowel(array[i]) == true){
      result.push(array[i].toUpperCase());
    }
    else {
      result.push(array[i]);
    };

  };


  return result.join("");
}

module.exports.isPalindrome = function isPalindrome (str) {

  var array = str.split("");
  var pally = [];


  for(var i = 0; i <= array.length - 1; ++i){
    pally.unshift(array[i]);
  };


  if(pally.join("") == array.join("") && pally.join("") != ""){
    return true;
  } else if(pally.join("") == ""){
    return "";
  } else {
    return false
  };



  //return pally.join("");
}