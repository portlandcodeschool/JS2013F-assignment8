module.exports.factorial = function factorial (num) {

  if (num < 0 || num !== Math.floor(num))
    return undefined;

  var result = 1;

  for (; num > 1; num--) {
    result *= num;
  }

  return result;
}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {
  var result = "";
  var seen = 1;

  for (var i = 0; i < str.length; i++ ) {
    if (/[a-zA-Z]/.test(str[i])) {
      ++ seen
    }
    if (seen % 2) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    } 
  }

  return result; 
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {
  var result = "";

  for (var i = 0; i < str.length; i += 1) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports.isPalindrome = function isPalindrome (str) {
  var result = ""

  for (var i = str.length -1; i >= 0; i -= 1) {
    result += str[i];
  }
  if (str === "") {
    return str;
  } 
  
  return result === str;
}