//  Return positive Number Array

function getNegativeNumber(numbers) {
    let positiveNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumber.push(numbers[i]);
        }
    }
    return positiveNumber;
}
const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 21];
const result = getNegativeNumber(numbers);
console.log(result);