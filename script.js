// Variables for Password Generator
var result = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "*&%^#@!?/";
var base = "";
var generateBtn = document.querySelector("#generate");
let passwordLength;
let forSure = "";

// 1. Get password length
//  A. More than 8 and less than 128
function reset() {
  result = "";
  base = "";
  passwordLength = 0;
  forSure = "";
}
function getRandom(string) {
  var randString = string.charAt(Math.floor(Math.random() * string.length));
  var randElement = randString;

  return randElement;
}

function generatePassword() {
  ask();
  function ask() {
    let userInput = prompt(
      "Your password must be between 8 and 128 characters. How many characters is your password?"
    );
    let userInputnum = parseInt(userInput);
    if (userInputnum >= 8 && userInputnum <= 128) {
      passwordLength = userInputnum;
    }
    //  B. If user selects less than 8 or more than 128 they are prompted to pick again
    else {
      alert("You must pick a number between 8 and 128 characters.");
      return ask();
    }
  }

  // 2. Confirm if user wants lowercase letters

  let lowercaseConfirm = confirm(
    "Should your password include lowercase letters?"
  );
  if (lowercaseConfirm) {
    base += lowercase;
    forSure += getRandom(lowercase);
  }
  // 3. Confirm if user wants uppercase letters

  let UpperCaseConfirm = confirm(
    "Should your password include uppercase letters?"
  );
  if (UpperCaseConfirm) {
    base += uppercase;
    forSure += getRandom(uppercase);
  }
  // 4. Confirm if user wants numbers
  let numbersConfirm = confirm("Should your password include numbers?");

  if (numbersConfirm) {
    base += numbers;
    forSure += getRandom(numbers);
  }

  // 5. Confirm if user wants special characters
  let specialcharConfirm = confirm(
    "Should your password include special characters?"
  );
  if (specialcharConfirm) {
    base += characters;
    forSure += getRandom(characters);
  }

  // 6. Password is generated and displayed to the user

  for (let index = 0; index < passwordLength; index++) {
    result += base.charAt(Math.floor(Math.random() * base.length));
  }

  let forSureString = forSure.split("");
  let resultArray = result.split("");

  for (var i = 0; i < forSureString.length; i++) {
    resultArray[i] = forSureString[i];
  }

  console.log(forSure);
  return resultArray.join("");
}

// Write password to the #password input
function writePassword() {
  reset();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
