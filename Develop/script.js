// Assignment code here
// Has to be between 8 and 128 characters
// Can include lower, upper, numbers, and special characters


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


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

// Write password to the #password input
function writePassword() {

  const length = parseInt(prompt("How many characters would you like your password to be?"));
  const includeLowercase = confirm("Would you like to include lowercase characters?");
  const includeUppercase = confirm("Would you like to include uppercase characters?");
  const includeNumbers = confirm("Would you like to include numbers?");
  const includeSymbols = confirm ("Would you like to include special characters?");

  //try catch to generate password and throw errors
  try{
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  catch(error){
    console.log(error);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);