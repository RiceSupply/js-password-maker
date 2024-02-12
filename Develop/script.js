// Assignment code here
// Has to be between 8 and 128 characters
// Can include lower, upper, numbers, and special characters

function generatePassword (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  //accepted variables for the password

  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = "!@#$%^&*_+?><.-=";

  let allowedChars = "";
  let password = "";

  //if parameters are true, add to the allowed characters
  allowedChars += includeLowercase ? lowerCaseChars : '';
  allowedChars += includeUppercase ? upperCaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  //if parameters are false, return an error

  if(length < 8) {
    return 'Password length must be at least 8 characters';
  }

  if(length > 128) { 
    return 'Password length must be less than 128 characters';
  }

  if(allowedChars === 0) {
    return 'At least one character needs to be selected';
  }

  //for loop to generate the password
  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

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