// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  window.alert("Passwords must be of a length of between 10 and 64 characters. They can contain upper and lower case letters as well as numbers and special characters.");
  const passwordLength = Number(prompt("How long do you want your password to be? (10 -  64 characters"));
  const passwordUpper = prompt("Do you want your password to contain upper case letters?\nEnter yes or no.");
  const passwordLower = prompt("Do you want your password to contain lower case letters?\nEnter yes or no.");
  const passwordNumber = prompt("Do you want your password to contain numbers?\nEnter yes or no.");
  const passwordChar = prompt("Do you want your password to contain special characters?\nEnter yes or no.");
  // Create array to store input form promts to display in confirmation alert
  let passwordAlert = [];
  // Create array to store input from prompts.
  let passwordOptions = [passwordLength];

  // If input has been entered, store it in array
  if (passwordUpper.toLowerCase() === "yes") {
    passwordAlert.push(" Upper Case Letters");
    passwordOptions.push(passwordUpper.toLowerCase);
  }
  if (passwordLower.toLowerCase() === "yes") {
    passwordAlert.push(" Lower Case Letters");
    passwordOptions.push(passwordLower.toLowerCase);
  }
  if (passwordNumber.toLowerCase() === "yes") {
    passwordAlert.push(" Numbers");
    passwordOptions.push(passwordNumber.toLowerCase);
  }
  if (passwordChar.toLowerCase() === "yes") {
    passwordAlert.push(" Special Characters");
    passwordOptions.push(passwordChar.toLowerCase);
  }
// Disply input options confirmation
  alert("Your password will be " + passwordLength + " characters long. It will contain" + passwordAlert);
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let character = arr[randomIndex];
  return character;
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  let upper = false, lower = false, number = false, charact = false;
  let password = "";
  
  for (let i = 0; i < passwordOptions[0]; i++) {
    let arrayType = [upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters];
    let randomIndex = Math.floor(Math.random() * arrayType.length);

    let passwordCharacter = getRandom(arrayType[randomIndex]);
    password.push(character);
    // Check if after loop execution all passwords options are satisfied
    if (passwordOptions[i + 1] === 'yes') {
      upper = true;
    }
    if (passwordOptions[i + 2] === 'yes') {
      upper = true;
    }
    if (passwordOptions[i + 3] === 'yes') {
      upper = true;
    }
    if (passwordOptions[i + 4] === 'yes') {
      upper = true;
    }
  }
    
}
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);