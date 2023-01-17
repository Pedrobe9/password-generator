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
  let passwordUpper = prompt("Do you want your password to contain upper case letters?\nEnter yes or no.");
  let passwordLower = prompt("Do you want your password to contain lower case letters?\nEnter yes or no.");
  let passwordNumber = prompt("Do you want your password to contain numbers?\nEnter yes or no.");
  let passwordChar = prompt("Do you want your password to contain special characters?\nEnter yes or no.");
  // Make them lower case to introduce case insensitivity and remove whitespace
  passwordUpper = passwordUpper.toLowerCase().trim();
  passwordLower = passwordLower.toLowerCase().trim();
  passwordNumber = passwordNumber.toLowerCase().trim();
  passwordChar = passwordChar.toLowerCase().trim();

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
  console.log("arr(getRandom()):  " + arr);
  let randIndex = Math.floor(Math.random() * arr.length);
 let character = arr[randIndex];
  console.log("arr[randIndex]: " + arr[randIndex]);
  return character;
}

// Function to generate password with user input
function passwordGenerator(passwordOptions) {
  let password = "";
  let lengthPassword = passwordOptions[0];
  passwordOptions.shift();
  for (let i = 0; i < lengthPassword; i++) {

    let randomIndex = Math.floor(Math.random() * passwordOptions.length);
    console.log("i=" + i, "passwordOptions[randomIndex]:  " + randomIndex + " - " + passwordOptions[randomIndex]);
    let passwordCharacter = getRandom(passwordOptions[randomIndex]);

    password = password.concat(passwordCharacter);
    console.log("password:  " + password);
  }
  return password;
}

function generatePassword() {
  let passwordOptions = getPasswordOptions();
  console.log("passwordOptions (GP)  " + passwordOptions);
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