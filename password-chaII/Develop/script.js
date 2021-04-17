// Create an array of the four choices (Lower-case, Upper-case, Numbers, Symbols)


var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbolChars = "!@#$%^&*()_+=-{}|[]:'?><,.";
var allChars = numberChars + upperChars + lowerChars + symbolChars;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = ""
  var passwordSize = prompt("What is the size of your password? (It must be more than 8 characters and less than 128 characters)")
  passwordSize = parseInt(passwordSize)

  if (passwordSize >= 8 && passwordSize <= 128) {

    var isLowercase = confirm("Do you want lowercase on your password?")
    var isUppercase = confirm("Do you want lowercase on your password?")
    var isNumeric = confirm("Do you want numbers in your password?")
    var isSpecialCharacters = confirm("Do you want special characters on your password?")

    for (let i = 0; password.length < passwordSize; i++) {
      if (isLowercase && password.length < passwordSize) {
        var index = Math.floor(Math.random() * lowerChars.length)
        password = password + lowerChars.charAt(index) //"" +"f" result=> "f"
      }

      if (isUppercase && password.length < passwordSize) {
        var index = Math.floor(Math.random() * upperChars.length)
        password = password + upperChars.charAt(index) //"" +"f" result=> "f"
      }
      if (isNumeric && password.length < passwordSize) {
        var index = Math.floor(Math.random() * numberChars.length)
        password = password + numberChars.charAt(index) //"" +"f" result=> "f"
      }
      if (isSpecialCharacters && password.length < passwordSize) {
        var index = Math.floor(Math.random() * symbolChars.length)
        password = password + symbolChars.charAt(index) //"" +"f" result=> "f"
      }

    }



    return password


  }
  else {
    alert("Invalid entry")
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
