// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var numbers = "0123456789".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
  var charArr = [];
  var finalArr = [];
  var passwordLength = 0;

  
  var passwordLength = prompt("How long would you like your password to be?(Enter a numeric value between 8 and 128)");

  while ((passwordLength < 8 || passwordLength > 128 || passwordLength === "" || isNaN(passwordLength))) {
    if (passwordLength < 8 || passwordLength > 128) {

      var passwordLength = prompt("Password is too short or too long. Please choose between 8 and 128 characters");

  }
    else if (passwordLength === "" || isNaN(passwordLength)){
      
      var passwordLength = prompt("Enter a numeric value between 8 and 128");
      console.log("pass");

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
    finalArr.push(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log("Will1");
    console.log(finalArr.length);

  }

  if(wantUc){

    for (var i = 0; i < upperCase.length; i++){

      charArr.push(upperCase[i]);

    }
    finalArr.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    console.log("Will2");
    console.log(finalArr.length);

  }

  if (wantLc){

    for (var i = 0; i < lowerCase.length; i++){

      charArr.push(lowerCase[i]);

    }
    finalArr.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    console.log("Will3");
    console.log(finalArr.length);
  }

  if (wantSymbol){
    for (var i =0; i < symbols.length; i++){

      charArr.push(symbols[i]);

    }
    finalArr.push(symbols[Math.floor(Math.random() * symbols.length)]);
    console.log("Will4");
    console.log(finalArr.length);
  }
  
console.log(charArr);
console.log(finalArr.length);
var modifiedPasswordLength = (passwordLength - finalArr.length);
console.log(modifiedPasswordLength);

for (var i = 0; i < modifiedPasswordLength; i++){

  finalArr.push(charArr[Math.floor(Math.random() * charArr.length)]);
  console.log(finalArr.length);
  console.log(modifiedPasswordLength);
  

}
  
  console.log(finalArr);
  return finalArr.join('');

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
