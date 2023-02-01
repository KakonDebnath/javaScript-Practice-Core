
/* 
// Method-1
function findOddSum(arrOfNumbers){
    // Find Odd Number
    let oddNumber = [];
    for (let i = 0; i < arrOfNumbers.length; i ++){
        const numbers = arrOfNumbers[i];
        if (numbers % 2 !==0) {
            oddNumber.push(numbers);
        }
    } 

    // Sum Odd Number

    let result = 0;
    for(let i = 0; i < oddNumber.length; i++){
        const totalNumber = oddNumber[i];
        result += totalNumber;
    }
    return result;
} 
*/



// Method-2
function findOddNumber(arr){
    let oddNumber = [];
    for (let i = 0; i < arr.length; i ++){
        const numbers = arr[i];
        if (numbers % 2 !==0) {
            oddNumber.push(numbers);
        }
    } 
    return oddNumber;
}

function findOddSum(arrOfNumbers){
    // Sum Odd Number
    const oddNumber  = findOddNumber(arrOfNumbers);
    let result = 0;
    for(let i = 0; i < oddNumber.length; i++){
        const totalNumber = oddNumber[i];
        result += totalNumber;
    }
    return result;
} 


let numbers = [5, 7, 8, 10, 45, 30];
const oddNumberSum = findOddSum (numbers);
console.log(oddNumberSum);
// findOddSum (numbers);

