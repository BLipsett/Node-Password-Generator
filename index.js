const inquirer = require("inquirer");




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
                choices: ["UPPERCASE", "lowercase", "numbers", "special characters"]
            }
        ]).then(answers => {
            console.info('Answer:', answers);
        });

}
createPassword()

