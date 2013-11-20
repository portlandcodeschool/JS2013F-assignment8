var test         = require('tape');
var romnum       = require('./romnum');
var conditionals = require('./solutions/conditionals');
var loops        = require('./solutions/loops');

test('Example test', function (t) {
  t.equal(5, 5);

  t.notEqual(2, 1);

  t.end();
});

test('Another example test', function (t) {
  t.plan(2)

  t.equal("Blah", "Blah");

  setTimeout(function () {
    t.notEqual("Hellos", "Hello");
  }, 500);

});

test('should convert decimals to roman numerals', function (t) {
  t.equal(romnum.decimalToRoman(7), "VII");

  t.equal(romnum.decimalToRoman(1998), "MCMXCVIII");

  t.end();
});

test('should convert roman numerals to decimals', function (t) {
  t.equal(romnum.romanToDecimal("VII"), 7);

  t.equal(romnum.romanToDecimal("MCM"), 1900);

  t.end();
});

test('should return true if given an even number', function (t) {
  t.equal(conditionals.isEven(4), true);

  t.end();
});

test('should return false if given an odd number', function (t) {
  t.equal(conditionals.isEven(3), false);

  t.end();
});

test('should return true if passed "beep"', function (t) {

  t.equal(conditionals.isBeep('beep'), true);
  t.equal(conditionals.isBeep('boop'), false);

  t.end();
});

test('should calculate factorial', function (t) {

  // golden path!
  t.equal(loops.factorial(5), 120);
  t.equal(loops.factorial(10), 3628800);

  // Edge cases
  t.equal(loops.factorial(0), 1);
  t.equal(loops.factorial(-1), undefined);
  t.equal(loops.factorial(1.5), undefined);

  t.end();
  
});

test('should capitalize every other letter', function (t) {
  
  // golden path
  t.equal(loops.capitalizeEveryOther("hello"), "hElLo");
  t.equal(loops.capitalizeEveryOther("Don't Taze Me, Bro!"), "dOn'T tAzE mE, bRo!");

  // weird cases
  t.equal(loops.capitalizeEveryOther(""), "");
  t.equal(loops.capitalizeEveryOther("a"), "a");
  t.equal(loops.capitalizeEveryOther("//10//abc////d e"), "//10//aBc////D e");

  t.end();

}); 

test('should capitalize vowels', function (t) {

  t.equal(loops.capitalizeVowels("hello"), "hEllO");
  t.equal(loops.capitalizeVowels("Don't Taze Me, Bro!"), "DOn't TAzE ME, BrO!");

  t.equal(loops.capitalizeVowels(""), "");
  t.equal(loops.capitalizeVowels("a"), "A");
  t.equal(loops.capitalizeVowels("//10//abc////d e"), "//10//Abc////d E");

  t.end();
});

test('should return true if passed a palindrone', function (t) {

  t.equal(loops.isPalindrome("wow"), true);
  t.equal(loops.isPalindrome("MaggieSmith"), false);
  t.equal(loops.isPalindrome("123454321"), true);


  t.equal(loops.isPalindrome("a"), true);
  t.equal(loops.isPalindrome(""), "");
  t.equal(loops.isPalindrome(" 2 3 4 3 2 "), true);

  t.end();
});