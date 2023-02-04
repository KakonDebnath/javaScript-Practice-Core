/* function getUniqueValue(array) {
    let count = 0;
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++){
        if (uniqueArray.indexOf(array[i]) == -1 ) {
            uniqueArray.push(array[i]);
            count++;
        }
    }
    return uniqueArray;
} */

function getUniqueValue(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (uniqueArray.includes(element) == 0) {
            uniqueArray.push(element);
        }
        
    }
    return uniqueArray;

}


const input1 = [10, 20, 30, 10, 20, 30, 40, 45, 50, 50];
// const input1 = ["kakon", "rakib", "emon", "rasel", "kakon", "roni", "roni", "emon"];
const uniqueValue = getUniqueValue (input1);
console.log(uniqueValue);