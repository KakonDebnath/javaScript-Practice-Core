function getNegativeNumber(numbers) {
    let negativeNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumber++;
        }
    }
    return negativeNumber;
}
const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 21];
const result = getNegativeNumber(numbers);
console.log(result);