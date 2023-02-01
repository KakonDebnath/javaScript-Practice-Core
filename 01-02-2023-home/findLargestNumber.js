function findMax(arrOfNumbers) {
    let largestNumber = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {

        let number = arrOfNumbers[i];
        if (largestNumber < number) {
            largestNumber = number;
        }
    }
    // console.log(largestNumber);
    return largestNumber;
}

let numbers = [20, 85, 71, 60, 90, 150];
const largeNumber = findMax(numbers);
console.log("Your Large Number Is: " +  largeNumber);