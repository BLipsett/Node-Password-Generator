const inquirer = require("inquirer");

function createPassword() {

    return inquirer

        .prompt([
            {
                type: "number",
                name: "passlength",
                message: "How many characters would you like in your password?",
                validate: function (value) {
                    if (value < 20 && value > 8) {

                        return true;
                    } else {
                        return 'Please enter a number between 8 and 20';
                    }
                }
            },
            {
                type: "confirm",
                name: "upper",
                message: "Would you like to add uppercase charasters?"
            },
            {
                type: "confirm",
                name: "lower",
                message: "Would you like lowercase characters?"
            },
            {
                type: "confirm",
                name: "number",
                message: "Would you like your password to have numbers?"
            },
            {
                type: "confirm",
                name: "special",
                message: "Would you like your password to have special characters?"
            }


        ]).then(answers => {
            console.info('Answer:', answers);
            
            let passLength = (answers.passlength);
           
            let selArr = [];
            
            for (i = 0; i < passLength; i++) {

                if (answers.upper === true) {
                    let upA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                    let item = upA[Math.floor(Math.random() * upA.length)]
                    let addA = selArr.push(item);

                } if (answers.lower === true) {
                    let lowA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                    let itemLow = lowA[Math.floor(Math.random() * lowA.length)]
                    let addU = selArr.push(itemLow);

                } if (answers.number === true) {
                    let numA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
                    let itemNum = numA[Math.floor(Math.random() * numA.length)]
                    let addN = selArr.push(itemNum)

                } if (answers.special === true) {
                    let spA = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
                    let itemSpec = spA[Math.floor(Math.random() * spA.length)]

                    let addS = selArr.push(itemSpec);

                } else if (answers === false) {
                    console.log("User must select at least one type of character")
                }
            }

            let pass = selArr.join("");
            console.log(pass)

            let finalPass = pass.substring(0, passLength);
            console.log(finalPass)
        });
}
createPassword()

