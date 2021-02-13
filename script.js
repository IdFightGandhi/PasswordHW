// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
var charArr =[];







function generatePassword(){
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters");

    if (passwordLength < 8 || passwordLength > 128) {

      var passwordLength = prompt("Password is too short or too long. Please choose between 8 and 128 characters");


    }else if (passwordLength === "" || Number.isNaN(passwordLength)){

      var passwordLength = prompt("Enter a valid value");

    }
    console.log(passwordLength)
  }

  
  var wantNumbers = confirm("Do you want numbers in your password?");
  var wantLc = confirm("Do you want  lower case letters in your password?");
  var wantUc = confirm("Do you want upper case letters in your password?");
  var wantSymbol = confirm("Do you want special characters in your password?");

  if (wantNumbers){

    for (var i = 0; i < numbers.length; i++){

      charArr.push(numbers[i]);

    }

    }else if(wantUc){

    for (var i = 0; i < wantUc.length; i++){

      charArr.push(wantUc[i]);

    }

  }else if (wantLc){

    for (var i = 0; i < wantLc.length; i++){

      charArr.push(wantLc[i]);

    }
  }else if (wantSymbol){
    for (var i =0; i < wantSymbol.length; i++){

      charArr.push(wantSymbol[i]);

    }
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
