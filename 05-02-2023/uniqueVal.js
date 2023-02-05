function getUnique(numbers) {
    let unique = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        console.log(number);
        // if (unique.includes(number) == 0) {
        //     unique.push(number);
        // }
        if (unique.indexOf(number) == -1) {
            unique.push(number);
        }
    }
    return unique;
}
const numbers = [20, 52, 41, 20, 85, 52, 96, 71, 100, 20, 100, 96, 71, 80];

const uniqueVal = getUnique(numbers);
console.log(uniqueVal);