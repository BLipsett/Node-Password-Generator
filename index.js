const inquirer = require("inquirer");
const PassWordGenerator = require("./passwordGenerator");

function createPassword() {

    return inquirer

        .prompt([
            {
                type: "number",
                name: "passlength",
                message: "How many characters would you like in your password?",
                validate: function (value) {
                    if (value < 21 && value > 7) {

                        return true;
                    } else {
                        return 'Please enter a number between 8 and 20';
                    }
                }
            },
            {
                type: "confirm",
                name: "upper",
                message: "Would you like to add uppercase characters?"
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

            let newPass = new PassWordGenerator(answers)
            

            console.log(`Your new password is ${newPass.value}`)

        });
}

function runPass() {

    return inquirer

        .prompt([
            {
                type: "confirm",
                name: "again",
                message: "Would you like a different password?"
            }
        ]).then(answers => {
            if (answers === true) {
                createPassword()
            } else {
                console.log("Thank you for using the password generator")
            }
        })
}

async function init() {
    try {
        await createPassword();

        await runPass()

    }
    catch (err) {
        console.log(err);
    }
}

init()

