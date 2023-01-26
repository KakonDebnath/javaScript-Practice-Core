//  some variable
var price = 500 ;
var age = 20;
var temperature = 40;
var weight = "52";
var name = "kakon";
console.log(typeof(weight + " " + name));
console.log(typeof(parseInt(weight + " " + temperature)));


// Practice 1
var gaveTaka = 1000;
var apple= 400;
var orange = 300;
var totalPrice = apple + orange;
var takaReturn = gaveTaka - totalPrice;
var myText = "shopkeeper will pay tk ";
var myOutput = myText + takaReturn ;
console.log(myOutput);
console.log(typeof(myOutput));
console.log(parseInt(myOutput));

// practice 2
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var sumOfSubjects = mathematics + biology + chemistry + physics + bangla;
var average = sumOfSubjects / 5;
console.log("Sum Of Subject = " + sumOfSubjects);
console.log("average Of Subject = " + average);
console.log(average.toFixed(2));
console.log(average.toFixed(3));
console.log(average.toFixed(1));
console.log(typeof(average));

var floatEx = "70.205464";
console.log(parseInt(floatEx));
console.log(parseFloat(floatEx));
console.log(typeof(floatEx));
floatEx=  parseFloat(floatEx);
console.log(typeof(floatEx));
console.log(floatEx.toFixed(4));

var saraMotherGave = 119;
var devidedBy = 5;
var result = saraMotherGave % devidedBy;
console.log("The Result of modules of = " + result);




