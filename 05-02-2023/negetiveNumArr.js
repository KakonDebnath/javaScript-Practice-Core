//  Return positive Number Array

function getNegativeNumber(numbers) {
    let negativeNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumber.push(numbers[i]);
        }
    }
    return negativeNumber;
}
const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 21];
const result = getNegativeNumber(numbers);
console.log(result);