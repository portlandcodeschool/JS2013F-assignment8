module.exports.factorial = function factorial (num) {

  if (num < 0 || num !== Math.floor(num))
  	return undefined;

  var result = 1;
  for (; num > 1; num--) {
  	result *=num;
  }

  return result;
}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {
  str = str.toLowerCase();
  counter = 0;
  newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])){
      counter++;
    }
  
  if (counter % 2 == 0){
    newStr += str[i].toUpperCase();
  } else {
    newStr += str[i];
  }
}
return newStr;
}

//   str = str.toLowerCase();
//   var newStr = [];
//   var blahStr = str.split("");
//   for (var i = 0; i < str.length; i++) {
//     if (/[a-zA-Z]/.test(blahStr[i]) && i % 2 !== 0) {
//       blahStr[i] = blahStr[i].toUpperCase();
//       newStr.push(blahStr[i]);
//     } else if (/[a-zA-Z]/.test(blahStr[i]) || i % 2 == 0) {
//       newStr.push(blahStr[i]);
//       i += 1;
//     }  else if (/\W/.test(blahStr[i])) {

//       newStr.push(blahStr[i]);
//       i += 3;
//     }
//   }
//   return newStr.join("");
// }




 /*var charIgnore (i) {
  do {i + 1; while (str[i] !== (/\w/));} 
}*/
// if (i == (/\W/)){
//   str = str;
// } else if (str[i] % 2 !== 0){
//  	str[i].replace(i,i.toUpperCase());
//  } else if (str[i] % 2 == 0){
//   str[i].replace(i,i.toLowerCase());
// }

// }




module.exports.capitalizeVowels = function capitalizeVowels (str) {

  str.split("")
  var newStr = [];
  for (var i = 0; i < str.length; i++){
    if (/[a]|[e]|[i]|[o]|[u]/.test(str[i])){
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");

}


module.exports.isPalindrome = function isPalindrome (str) {
  var reverse = [];
  var splitStr = str.split("");
  for (var i = splitStr.length - 1; i >= 0; i--) {
    reverse.push(splitStr[i]);
  }
  if (str == reverse.join("")) {
    return true;
  } else {
    return false;
  }
}