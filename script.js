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
  // Make options lower case to introduce case insensitivity and remove whitespace
  window.alert("Passwords must be of a length of between 10 and 64 characters. They can contain upper and lower case letters as well as numbers and special characters.");
  // use of while loop, https://www.w3schools.com/js/js_loop_while.asp
  // while loop will repeate until condition satisfied
  let passwordLength;
  do {
    passwordLength = Number(prompt("How long do you want your password to be? (10 -  64 characters"));
  } 
  while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64);
  let passwordUpper;
  do {
    passwordUpper = (prompt("Do you want your password to contain upper case letters?\nEnter yes or no.")).toLowerCase().trim();
  }
  while (passwordUpper !== 'yes' && passwordUpper !== 'no');
  let passwordLower;
  do {
    passwordLower = (prompt("Do you want your password to contain lower case letters?\nEnter yes or no.")).toLowerCase().trim();
  }
  while (passwordLower !== 'yes' && passwordLower !== 'no');
  let passwordNumber;
  do {
    passwordNumber = (prompt("Do you want your password to contain numbers?\nEnter yes or no.")).toLowerCase().trim();
  }
  while (passwordNumber !== 'yes' && passwordNumber !== 'no');
  let passwordChar;
  do {
    passwordChar = (prompt("Do you want your password to contain special characters?\nEnter yes or no.")).toLowerCase().trim();
  }
  while (passwordChar !== 'yes' && passwordChar !== 'no');


  // Create array to store input form promts to display in confirmation alert
  let passwordAlert = [];
  // Create array to store input from prompts.
  let passwordOptions = [passwordLength];

  // If input has been entered, store it in array

  if (passwordUpper === "yes") {
    passwordAlert.push(" Upper Case Letters");
    passwordOptions.push(upperCasedCharacters);
  }
  if (passwordLower === "yes") {
    passwordAlert.push(" Lower Case Letters");
    passwordOptions.push(lowerCasedCharacters);
  }
  if (passwordNumber === "yes") {
    passwordAlert.push(" Numbers");
    passwordOptions.push(numericCharacters);
  }
  if (passwordChar === "yes") {
    passwordAlert.push(" Special Characters");
    passwordOptions.push(specialCharacters);
  }
// Disply input options confirmation
  alert("Your password will be " + passwordLength + " characters long. It will contain" + passwordAlert);
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let character = arr[randIndex];
  return character;
}

// Function to generate password with user input
function passwordGenerator(passwordOptions) {
  let password = "";  // Declare string to store password
  let lengthPassword = passwordOptions[0];
  passwordOptions.shift();
  for (let i = 0; i < lengthPassword; i++) {
    // Generate random numbers between 0 and 1, nultiplied by numberof options, this will result in 
    // numbers between 0 and length of passwordOptions
    let randomIndex = Math.floor(Math.random() * passwordOptions.length);
    let passwordCharacter = getRandom(passwordOptions[randomIndex]);
    password = password.concat(passwordCharacter);
  }
  return password;
}

function generatePassword() {
  let passwordOptions = getPasswordOptions();
  let password = passwordGenerator(passwordOptions);
  return password; 
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