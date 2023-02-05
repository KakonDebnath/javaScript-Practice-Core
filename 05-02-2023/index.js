// 1-10 Number Sum

/* function sum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    return sum;
}

const totalSum = sum ();
console.log(totalSum); */


/* 
    // 1-100 even number sum
    function getEvenNumber() {
        let evenNumberSum = 0;
        for (let i = 0; i <= 100; i = i + 2) {
            evenNumberSum += i;
        }
        return evenNumberSum;
    }
    const result = getEvenNumber();
    console.log(result); 
*/
// 1-100 even number sum
function getOddNumber() {
    let oddNumberSum = 0;
    for (let i = 1; i <= 100; i = i + 2) {
        // console.log(i);
        oddNumberSum += i;
    }
    return oddNumberSum;
}
const result = getOddNumber();
console.log(result);