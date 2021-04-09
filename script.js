// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//console.log(Math.floor(Math.random() * 6))

// Generate password Function.
// function generatePassword() {
//     var length = 16 ;
//     var character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"' ;
//     var result = '' ;

//     for (let index = 0; n = character.length, index < length; index++) {
//         result += character.charAt(Math.floor(Math.random() * n));
//     }
//     return result;
// }

//console.log(generatePassword())

// Define variable for Genereatior Functions
const GenFunc = {
    lower: LowerCaseGen(),
    upper: UpperCaseGen(),
    number: NumerCaseGen(),
    symbols: SymbolCaseGen(),
};

console.log(GenFunc);

// Functions for character Generation 
// Resource https://tools.oratory.com/altcodes.html
function LowerCaseGen() {
    var LowerCase = 'abcdefghijklmnopqrstuvwxyz'
    return LowerCase[Math.floor(Math.random() * LowerCase.length)]
}

function UpperCaseGen() {
    var LowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return LowerCase[Math.floor(Math.random() * LowerCase.length)]
}

function NumerCaseGen() {
    var LowerCase = '0123456789'
    return LowerCase[Math.floor(Math.random() * LowerCase.length)]
}
var length = 10;
var passwordpool = []
var passwordfinal = ''

console.log(passwordpool)

function SymbolCaseGen() {
    var LowerCase = '"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"'
    return LowerCase[Math.floor(Math.random() * LowerCase.length)]
}

passwordpool.push(GenFunc.symbols)

console.log(passwordpool)

