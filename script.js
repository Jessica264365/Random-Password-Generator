// Variables for Password Generator
var result = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "*&%^#@!?/";
var base = "";
var generateBtn = document.querySelector("#generate");
let passwordLength;

// 1. Get password length
//  A. More than 8 and less than 128

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
  }
  // 3. Confirm if user wants uppercase letters

  let UpperCaseConfirm = confirm(
    "Should your password include uppercase letters?"
  );
  if (UpperCaseConfirm) {
    base += uppercase;
  }
  // 4. Confirm if user wants numbers
  let numbersConfirm = confirm("Should your password include numbers?");

  if (numbersConfirm) {
    base += numbers;
  }

  // 5. Confirm if user wants special characters
  let specialcharConfirm = confirm(
    "Should your password include special characters?"
  );
  if (specialcharConfirm) {
    base += characters;
  }

  // 6. Password is generated and displayed to the user

  for (let index = 0; index < passwordLength; index++) {
    result += base.charAt(Math.floor(Math.random() * base.length));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

console.log(result);
