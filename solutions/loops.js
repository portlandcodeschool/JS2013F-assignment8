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
  //str.split("");
  if (str.length < 2){
      str = str;
  } else {
  for (var i = 1; i <= str.length;){
    if (str[i] !== (/[a-z]/)){
     do {i + 1;
      } while (str[i] !== (/[a-z]/));
    } else {
     str[i] == str[i].replace(str[i], str[i].toUpperCase());
   } 
    i +=2;
  } 
  return str;
}
}  

// if (i == (/\W/)){
//   str = str;
// } else if (str[i] % 2 !== 0){
//  	str[i].replace(i,i.toUpperCase());
//  } else if (str[i] % 2 == 0){
//   str[i].replace(i,i.toLowerCase());
// }

// }




module.exports.capitalizeVowels = function capitalizeVowels (str) {

// str.split("");
// for (var i = 0; i <= str.length; i++){
//   if (str[i] === (/\W/ || /\s/)){
//     str[i];
//   }else if (str[i] === "a" || "A"){
//     str[i] === "A";
//   } else if (str[i] === "e" || "E"){
//     str[i] === "E";
//   } else if (str[i] === "i" || "I"){
//     str[i] === "I";
//   } else if (str[i] === "o" || "O"){
//     str[i] === "O";
//   } else if (str[i] === "u" || "U"){
//     str[i] === "U";
//   }
// //var joined = str.join();
// }

// var str = "Apples are round, and apples are juicy.";
// var newstr = str.replace("apples", "oranges", "gi");
// str = str.replace('a', 'A');
// str = str.replace('e', 'E');
// str = str.replace('i', 'I');
// str = str.replace('o', 'O');
// str = str.replace('u', 'U');
//str = str;
str.split("")
for (var i = 0; i <= str.length; i++){
  if (str[i] == 'a' || 'e' || 'i' || 'o' || 'u'){
    str[i] == str[i].replace(/str[i]/i, str[i].toUpperCase());
  }
}
return str.toString();

}


module.exports.isPalindrome = function isPalindrome (str) {
var frontwards, backwards, bool = false;
for (var i = 0; i<=str.length; i++) {
  frontwards.push(str[i]);
}
for (var i = str.length; i>=0; i--) {
  backwards.push(str[i]);
}
if (frontwards == backwards){
  bool = true;
}


  return bool;

}