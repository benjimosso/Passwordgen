// Assignment Code
var generateBtn = document.querySelector("#generate");

//define var for password elements. 
var LowerCasePass = "abcdefghijklmnopqrstuvwxyz".split("");
var UpperCasePass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var NumbersPass = '0123456789'.split("");
var SymbolsPass = '"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"'.split("")
    //console.log(SymbolsPass, LowerCase, NumbersPass, UpperCase)



// Write password to the #password input
function writePassword() {
    function UserOptions() {
        var length = parseInt(prompt("Select a number betweem 8 and 128 to set the password lenght"))
        console.log(length)
            //Kill in case of prompt cancel.
        if (!length) return;
        // if user don't comply the criteria
        if (length < 8 || length > 128) {
            alert("password needs to be between 8 and 128 characters long")
                // Go back to main Prompt
            return UserOptions();
        }

        // if (length > 128) {
        //     window.alert("password needs to be between 8 and 128 characters long")
        //         // Go back to main Prompt
        //     return UserOptions();
        // }

        // Define Var's for Use of Characters.
        var UseLower = confirm("Do you wnat to include LowerCase Characters")

        var UseUpper = confirm("Do you want to include UpperCase Characters")

        var UseNumbers = confirm("Do you want to include Numbers")

        var UseSymbols = confirm("Do you want to include Symbols")

        if (!UseLower && !UseUpper && !UseNumbers && !UseSymbols) {
            alert("you need to select at least one criteria.")
            return UserOptions()
        }

        // Define object to use on Password gen Function. 
        var UserAnswers = {
            length: length,
            lower: UseLower,
            upper: UseUpper,
            number: UseNumbers,
            symbols: UseSymbols,
        }
        return UserAnswers;
    };

    //UserOptions()

    function generatePassword() {
        var options = UserOptions();
        console.log(options)

        var passwordpool = [];
        console.log(passwordpool)

        if (options.lower) {
            for (let index = 0; index < LowerCasePass.length; index++) {
                passwordpool.push(LowerCasePass[index]);
            }
        }
            if (options.upper) {
                for (let index = 0; index < UpperCasePass.length; index++) {
                    passwordpool.push(UpperCasePass[index]);
                }
            }
                if (options.number) {
                    for (let index = 0; index < NumbersPass.length; index++) {
                        passwordpool.push(NumbersPass[index]);
                    }
                }
                    if (options.symbols) {
                        for (let index = 0; index < SymbolsPass.length; index++) {
                            passwordpool.push(SymbolsPass[index]);
                        }
                    }

                    var finalPassword = [];

                    for (let index = 0; index < options.length; ++index) {
                        var randpass = Math.floor(Math.random() * passwordpool.length);
                        console.log(randpass)
                        finalPassword.push(passwordpool[randpass])
                }

                console.log(finalPassword)
                console.log(options.length)

                // 
                var DefPassword = finalPassword.join('')
                console.log(DefPassword)
                return DefPassword;
    };
            
        
    


    var password = generatePassword()

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// var options = UserOptions();
// var passwordPool = [];
// var test = 10

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Alternative password Generator wothout prompt options.
// Generate password Function.
// function generatePassword() {
//     return LowerCaseGen() + UpperCaseGen() + NumerCaseGen() + SymbolCaseGen();
// }

//console.log(generatePassword())

// Define variable for Genereatior Functions
// const GenFunc = {
//     lower: LowerCaseGen(),
//     upper: UpperCaseGen(),
//     number: NumerCaseGen(),
//     symbols: SymbolCaseGen(),
// };

// console.log(GenFunc);
// // Functions for character Generation 
// // Resource https://tools.oratory.com/altcodes.html
// function LowerCaseGen() {
//     var LowerCase = 'abcdefghijklmnopqrstuvwxyz'
//     return LowerCase[Math.floor(Math.random() * LowerCase.length)]
// }

// function UpperCaseGen() {
//     var LowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     return LowerCase[Math.floor(Math.random() * LowerCase.length)]
// }

// function NumerCaseGen() {
//     var LowerCase = '0123456789'
//     return LowerCase[Math.floor(Math.random() * LowerCase.length)]
// }

// function SymbolCaseGen() {
//     var LowerCase = '"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"'
//     return LowerCase[Math.floor(Math.random() * LowerCase.length)]
// }