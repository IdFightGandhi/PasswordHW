// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
var charArr =[];







function generatePassword(){
  var userPrompt = 0;
  while (userPrompt < 8 || userPrompt > 128) {
    var userPrompt = prompt("Choose a password length between 8 and 128 characters");

    if (userPrompt < 8 || userPrompt > 128) {

      var userPrompt = prompt("Password is too short or too long. Please choose between 8 and 128 characters");


    }else if (userPrompt === "" || Number.isNaN(userPrompt)){

      var userPrompt = prompt("Enter a valid value");

    }
    console.log(userPrompt)
  }

  
  var wantNumbers = confirm("Do you want numbers in your password?");
  var wantLc = confirm("Do you want  lower case letters in your password?");
  var wantUc = confirm("Do you want upper case letters in your password?");
  var wantSymbol = confirm("Do you want special characters in your password?");

  if (wantLc) {

    for (var i =0; i )
  }


  


}




console.log(numbers)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
