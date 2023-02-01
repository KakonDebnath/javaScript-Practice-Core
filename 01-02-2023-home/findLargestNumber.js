/* function findMax(arrOfNumbers) {
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
 */

function findSecondLargestElem(arr){
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(first);
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1,39]
findSecondLargestElem(arr);