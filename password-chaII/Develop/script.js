
// Assignment code here
// Create an array of the four choices (Lower-case, Upper-case, Numbers, Symbols)





  
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var symbolChars = "!@#$%^&*()_+=-{}|[]:'?><,.";
  var allChars = numberChar + upperChars + lowerChars + symbolChars;
  var randPasswordArray = Array(passwordLength);

  randPasswordArray [0] = numberChars;
  randPasswordArray [1] = upperChars;
  randPasswordArray [2] = lowerChars;
  randPasswordArray [3] = symbolChars;

  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(x); { return x[Math.floor(Math.random()* x.length)] })).join('');

  }

  function shuffleAray(array {
    for (var i = array.length - 1; i--)
  })





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
