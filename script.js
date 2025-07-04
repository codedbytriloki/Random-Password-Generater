const passwordBox = document.getElementById("inputBox");
const copyEl = document.getElementById("copy");
const passwordLength = document.getElementById("length");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const passwordBtn = document.getElementById("create-password");

const generatePassword = (length) => {
  let upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  let lower = 'qwrtyuiopasdfghjklzxcvbnm';
  let number = '0123456789';
  let symbol = '!@#$%^&*?';

  let password = "";
  let possibleChars = "";
  
  if(uppercaseEl.checked){
    possibleChars += upper;
  }
  if(lowercaseEl.checked){
    possibleChars += lower;
  }
  if(numberEl.checked){
    possibleChars += number;
  }
  if(symbolEl.checked){
    possibleChars += symbol;
  }
  if(possibleChars.length === 0){
    alert("Please selected at least one option! ")
  }
  for(let i = 0; i < length; i++){
    password += generateNumber(possibleChars);
  }
  return password;
}

function generateNumber(data){
  return data[Math.floor(Math.random() * data.length )];
}

passwordBtn.addEventListener('click', () => {
  const length = parseInt(passwordLength.value);
  if( length < 4){
    alert("Minimum length be 4");
    return;
  }
  const password = generatePassword(length);

  passwordBox.value = password
})

copyEl.addEventListener('click', () => {
 const password = passwordBox.value;

 if(password){
   navigator.clipboard.writeText(password);
   alert("Password copied to clipboard");
 }
})
