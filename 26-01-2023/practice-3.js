// Practice -3
// print largest value

var number1 = 9;
var number2 = 79;
var number3 = 45;
var number4 = 90;
var largestNumber;
// console.log(largestNumber);

if (number1 >= number2 && number1 >= number3 && number1 >= number4) {
    largestNumber = number1;
} else if (number2 >= number1 && number2 >= number3 && number2 >= number4) {
    largestNumber = number2;
} else if (number3 >= number1 && number3 >= number2 && number3 >= number4) {
    largestNumber = number3;
}else{
    largestNumber = number4;
}

console.log("Your Large number is : " + largestNumber);

// Another Example
// Max number
console.log("20,10,30,40,50,60,72  Maximum value is: " + Math.max(20,10,30,40,50,60,72));

// min number
console.log("20,10,30,40,50,60,72  Minimum value is: " + Math.min(20,10,30,40,50,60,72));