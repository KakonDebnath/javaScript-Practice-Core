function sumOfArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function average(arrOfMarks) {
    //write your code here
    // don't forget to write return
    let sumOfSub = sumOfArray(arrOfMarks);
    let myAvg = sumOfSub / arrOfMarks.length;
    myAvg = myAvg.toFixed(2);
    myAvg = parseFloat(myAvg);
    return myAvg;
}


/* function average(arrOfMarks) {
    let sumOfSub = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        sumOfSub += arrOfMarks[i];
    }
    let myAvg = sumOfSub / arrOfMarks.length;
    myAvg = myAvg.toFixed(2);
    myAvg = parseFloat(myAvg);
    return myAvg;
} */




let marks = [75.25, 65, 80, 35.45, 99.50];
let avg = average(marks);
console.log(avg);