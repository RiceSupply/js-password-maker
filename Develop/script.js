// Assignment code here
// Has to be between 8 and 128 characters
// Can include lower, upper, numbers, and special characters

function generatePassword (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = "!@#$%^&*_+?><.-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerCaseChars : '';
  allowedChars += includeUppercase ? upperCaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  console.log(allowedChars);

  return '';
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);