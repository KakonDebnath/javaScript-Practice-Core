/*
 // Odd-Even Number if- else Statement

function oddNumber(number) {
      let msg = "";
      if (number % 2 === 0) {
            return msg += "This Is Even Number";
      }
      else{
            return msg += "This Is Odd Number";
      }
}

let number = 25;
let myOddNumber = oddNumber(number);
console.log(myOddNumber);
 */


/*
// Practice-1 
// print Avg Number from an Array

function add(numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
      }
      return result;
}
function avg(numbers) {
      let result = 0;
      let arrayLength = numbers.length;
      let sum = add(numbers);
      result += sum / arrayLength;
      return result;
}

let numbers = [10, 20, 30, 40, 50, 60, 90];
let avgNumber = avg(numbers);
 */

/* // Problem- 2
// Print Even Number sum from an array

function getEvenNumber(array) {
      let arrayLength = array.length;
      let evenNumber = [];
      for (let i = 0; i < arrayLength; i++) {
            let number = array[i];
            if (number % 2 === 0) {
                  evenNumber.push(number);
            }
      }
      return evenNumber;
}
// let allEvenNumber = getEvenNumber(myArray);

function evenNumberSum(array) {
      let allEvenNumber = getEvenNumber(array);
      let sumResult = 0;
      // console.log(allEvenNumber);
      for (let i = 0; i < allEvenNumber.length; i++) {
            sumResult += allEvenNumber[i];
      }
      return sumResult;
      
}
// console.log(allEvenNumber);

const myArray = [10, 20, 30, 45, 40, 65, 85, 52];
let mySum = evenNumberSum(myArray);
console.log(mySum);
 */

