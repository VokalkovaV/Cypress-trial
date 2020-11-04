// let rodnaCisla = function cisla () {
//         let birthNumbers = [];
//         for(let i = 0; i <= 5; i++ ){
//             let rc = Math.floor(Math.random() * 10000000000) + 1;
//             birthNumbers.push(rc);
//         }
//         return birthNumbers;
//     };
//
// let poleCisel = rodnaCisla();
//
// let probandi = {
//     probandA: {
//         rc: poleCisel[0]
//
//     },
//     probandB: {
//         rc: poleCisel[1]
//
//     },
//     probandC: {
//         rc: poleCisel[2]
//
//     }
//
// }
// console.log(poleCisel);
// console.log(probandi.probandA.rc, probandi.probandB.rc, probandi.probandC.rc);


// function randomBirthNumberGen()
// {
//     function randomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//
//     let firstTwo = randomNumber(10, 99);
//     let secondTwo = randomNumber(10, 28);
//     let lastFour = randomNumber(1000, 9999);
//
//     // console.log(firstTwo);
//     // console.log(secondTwo);
//     // console.log(lastFour);
//
//
//     return firstTwo + "54" + secondTwo + lastFour;
// }
//
// // console.log(randomBirthNumberGen());
//
//
// function changeFormatOfDateNumber(){
//     let genDateNumber = randomBirthNumberGen();
//
//     function splitAtIndex(value, index) {
//         return genDateNumber.substring(0, 6 ) + "/" + genDateNumber.substring(6);
//     }
//
//     return  splitAtIndex();
//
// }
//
// console.log(changeFormatOfDateNumber());
//
// function changeNumberToDate(){
//
// }


// function capFirst(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//
// function generateName(){
//     var name1 = ["alice","alen","bela","ben","joey","samantha","urshulla","peach"];
//
//     var name2 = ["new","old","simons","october","great","terrible","sad", "ugly"];
//
//     var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
//     return name;
//
// }

// console.log(generateName());

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const letters = alphabet[getRandomInt(0, alphabet.length -1)] + alphabet[getRandomInt(0, alphabet.length -1)]

function generateAliquotBarcode() {
        return 'bar' + letters + letters + getRandomInt(0,90);
}

function generateBoxBarcode(){
    return 'box' + letters + getRandomInt(0,90);
}

console.log(generateAliquotBarcode());
console.log(generateBoxBarcode());