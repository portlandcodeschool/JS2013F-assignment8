function capitalizeEveryOther (str) {

  var splitStr = str.split("");
  var re = /[A-Z]|[a-z]/;
  var alternStr = "";


  for (var i = 0; i <= splitStr.length - 1; i++) {

  	if (re.test(splitStr[i])) {

      var prevLetterLoc = 1; 
      
      while (!re.test(splitStr[i-prevLetterLoc]) && splitStr[i-prevLetterLoc] !== undefined) {
      
      prevLetterLoc += 1;
      
      };

      if (alternStr.charAt(i-prevLetterLoc) !== undefined) {

        if (alternStr.charAt(i-prevLetterLoc).toUpperCase() === alternStr.charAt(i-prevLetterLoc)) {

          alternStr += splitStr[i].toLowerCase();
        } else {

          alternStr += splitStr[i].toUpperCase();
        }
      } else {

        alternStr += splitStr[i].toLowerCase();
      }
  	} else {

      alternStr += splitStr[i];
    }
  }

  return alternStr;
}

console.log(capitalizeEveryOther("Come on! Work you silly thing!"));


