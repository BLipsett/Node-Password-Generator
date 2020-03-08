const inquirer = require("inquirer");


function addARR() {

    const lowerArr = ["a-z"];
    console.log(lowerArr);
}

function createPassword() {
    let five = "a-z";
    return inquirer

        .prompt([
            {
                type: "number",
                name: "passlength",
                message: "How many characters would you like in your password?"
            },

            /*{

                type: "checkbox",
                name: "characters",
                message: "Which character types would you like in your password",
                choices: [{ name: "UPPERCASE", value: 1 }, { name: 'lowercase', value: 2 }, { name: "numbers", value: 3 }, { name: "special characters", value: 4 }]

            },*/
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
            // console.log(answers.characters);
            let passLength = (answers.passlength);
            /* let upperSel = answers.characters[0];
             let lowerSel = (JSON.stringify(answers.characters[1]));
             let numberSel = (JSON.stringify(answers.characters[2]));
             let specialSel = (JSON.stringify(answers.characters[3]));*/


            //console.log(upperSel);
             let selArr = [];
             //let addSel = selArr.push(answers.characters);
             // console.log(selArr);
             //let ansArr = (JSON.stringify(answers.characters));
 


            if (answers.upper === true) {
                console.log("nice");
                let upA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                let addA = selArr.push(upA);

            } if (answers.lower === true) {
                console.log("dumb");
                let lowA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                let addU = selArr.push(lowA);

            } if (answers.number === true) {
                let numA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
                let addN = selArr.push(numA)

            } if (answers.special === true) {
                let spA = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
                let addS = selArr.push(spA);

            } else {
                console.log("please make a selection")
            }

            console.log(selArr);
            console.log(passLength);
            let buildArr = (JSON.stringify(selArr));
            console.log(buildArr)



        
        });

}
createPassword()

