function isEven (num) {

  // implement me!
  if(num % 2 == 0){
  	return true;
  }else{return false;};


  //return num;
}

function isBeep (str) {

  // implement me!
  if(str == "beep"){
  	return true;
  }else{return false};

  //return str;
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;