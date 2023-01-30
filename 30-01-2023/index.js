
/* // Problem-1
function foo(){
      console.log("Foo");
      bar();
      return "Thanks";
}

function bar () {
      console.log("bar");
}

// console.log(foo()); jodi function Console log a call kori tahole it's take a return value from function;
var hi = foo();
console.log(hi);

 */

/* 
// Problem-2
// Write a function called make_avg() Which will take an three integer and return the average of those value

function make_avg(a, b, c) {
      var sum = a + b + c;
      var avg = sum / 3;
      return avg;
}

var myAvgNumber = make_avg( 10, 20, 30);
console.log(myAvgNumber); 
*/

/* // Problem-3
// Write a function called make_avg() Which will take an array of integer and the size of the array and return the average of those value

var number = [20, 10, 40, 30];
var len = number.length;


function make_avg(numbers, len) {
      // console.log(numbers  , len);
      var total = 0;
      for (var i = 0; i < len; i++) {
            var number = numbers[i];
            total += number;
      }
      console.log("Total Number Is : " + total);
      var avg = total / len;
      console.log("Your Average Marks is: " + avg);
}
// Calling function by passing array and array length.
make_avg(number, len); // entire array passed by reference. */

// Problem-4 
// Write A function called odd_even() Which take an integer value and tells whether this Value is even or odd. You need to do it in 4 ways
// 1. Has Return + Has Parameter
// 2. no Return + Has Parameter

function odd_even (n){
      var number = n;
      if(number % 2 === 0){
            console.log(number + ": is a Even Number");

      }else{
            console.log(number + ": is a Odd Number");
      }
}

odd_even(57);

