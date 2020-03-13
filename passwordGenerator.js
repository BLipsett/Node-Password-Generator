class PasswordGenerator {
    value = "";
    constructor(option, bpk) {
this.generate(option)
this.make(bpk)
    }
    generate(optionsObj) {
        let passLength = (optionsObj.passlength);

        let selArr = [];

        for (let i = 0; i < passLength; i++) {

            if (optionsObj.upper === true) {
                let upA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                let item = upA[Math.floor(Math.random() * upA.length)]
                let addA = selArr.push(item);

            } if (optionsObj.lower === true) {
                let lowA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                let itemLow = lowA[Math.floor(Math.random() * lowA.length)]
                let addU = selArr.push(itemLow);

            } if (optionsObj.number === true) {
                let numA = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
                let itemNum = numA[Math.floor(Math.random() * numA.length)]
                let addN = selArr.push(itemNum)

            } if (optionsObj.special === true) {
                let spA = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="]
                let itemSpec = spA[Math.floor(Math.random() * spA.length)]

                let addS = selArr.push(itemSpec);

            } else if (optionsObj === false) {
                console.log("User must select at least one type of character")
            }
        }

        let pass = selArr.join("");
         this.value = pass.substring(0, passLength);
    }
}

module.exports = PasswordGenerator