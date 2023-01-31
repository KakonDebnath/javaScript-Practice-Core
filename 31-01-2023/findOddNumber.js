function findOddNumber(numbers){
    const oddNumber = [];
    //write your code here
    //don't forget to write return
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number % 2 !==0){
            oddNumber.push(number);
        }
    }
    // console.log(oddNumber);
    return oddNumber;
}


function oddNumberSum(numbers) {
        const oddNumber = findOddNumber(numbers);
        // console.log(oddNumber);
        let sum = 0;
        for (let i = 0; i < oddNumber.length; i++){
            const number = oddNumber[i];
            // console.log(number);
            sum += number;
        }
        return sum;
    }

    let numbers = [5, 7, 8, 10, 45, 30, 3, 13, 40, 9];
    const sumOfOddNumber = oddNumberSum(numbers);
console.log(sumOfOddNumber);

