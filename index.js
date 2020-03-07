const inquirer = require("inquirer");


function addARR() {

    const lowerArr = ["a-z"];
    console.log(lowerArr);
}

function createPassword() {
    return inquirer
        .prompt([
            {
                type: "number",
                name: "length",
                message: "How many characters would you like in your password?"
            },
            {
                type: "checkbox",
                name: "characters",
                message: "Which character types would you like in your password",
                choices: ["UPPERCASE", "lowercase", "numbers", "special characters"],
                
                
            }
        ]).then(answers => {
            console.info('Answer:', answers);
            console.log(answers.characters);
            let chars = (JSON.stringify(answers.characters));
            let five = 5;
            console.log(chars);

            if (five === 5) {
                console.log("nice");
                addARR(lowerArr)
            } else {
                console.log("dumb");
            }
            
        });

}
createPassword()

