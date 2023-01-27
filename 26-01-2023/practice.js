// Task - 1
var fruits = ["Apple", "Banana", "Orange"];

// Find The indexOf "Banana" And Replace it With "Mango"

console.log(fruits.indexOf("Banana")); // 1

console.log(fruits[1]); //Banana

fruits[1] = "Mango";
console.log(fruits); //[ 'Apple', 'Mango', 'Orange' ]

// Task -2
// removed "Orange" and add "Watermelon"
var poppedValue =  fruits.pop(); 

// note pop always return depreciated value
console.log(poppedValue); // Orange


console.log(fruits); //[ 'Apple', 'Mango' ]

// new length of fruits array 
console.log(fruits.length);// 2

// add "watermelon" last of fruits array

fruits.push("watermelon");

console.log(fruits);
// new length of fruits array 
console.log(fruits.length);// 3