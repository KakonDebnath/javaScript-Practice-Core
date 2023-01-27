var friendsAge = [11, 22, 14, 20, 15, 50, 54];
var picnicFee = [400, 580, 700, 900,1400];
var friendName = ["emon", "sakil", "rasel", "nobi"];
console.log(friendsAge);
console.log(friendsAge.length);
console.log(typeof(friendsAge));


// array index

var friendName1 = friendName[2];
console.log(friendName1);

//set element value by index
friendName[1] = "sumon";
console.log(friendName);

//find element by indexOf

var findName = friendName.indexOf("nobi");
console.log(findName);


// add and remove from a array
friendsAge.push(100);
console.log(friendsAge);

 friendName.push("roni", "kakon");
console.log(friendName);

// pop remove last element of array and return removed element
var item = friendName.pop();
console.log(friendName);
console.log(item);

// add first element of array

friendName.unshift("kakon");
console.log(friendName);

// removed first element of array and it return removed element
var removedItem = friendName.shift();
console.log(removedItem);