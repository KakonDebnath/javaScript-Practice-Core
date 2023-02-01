/* 
function getOddNumber (numbers) {
    const oddNumber = [];
    for (let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        if (number % 2 !== 0) {
            oddNumber.push(number);
        }
    }
    return oddNumber;
}
let numbers = [20, 10, 30, 40, 25, 95 , 31, 19, 21, 60, 2, 8];
const oddNumber = getOddNumber (numbers);
console.log(oddNumber); 
*/

function getEvenNumber (numbers) {
    const evenNumber = [];
    for (let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        if (number % 2 === 0) {
            evenNumber.push(number);
        }
    }
    return evenNumber;
}
let numbers = [20, 10, 30, 40, 25, 95 , 31, 19, 21, 60, 2, 8];
const evenNumber = getEvenNumber (numbers);
console.log(evenNumber); 
