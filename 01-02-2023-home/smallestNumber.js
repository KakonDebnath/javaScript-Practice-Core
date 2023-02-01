function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
    let smallestNumber = numbers[0];
    for (let i = 0; i< numbers.length; i++){
        const number = numbers[i];
        if(smallestNumber > number){
            smallestNumber = number;
        }
    }
    return smallestNumber;
}


let numbers = [85, 96, 21, 65, 12, 9, 1]; 

const smallestNumber = findingSmallest(numbers);
console.log(smallestNumber);