let numbers = [11, 12, 32, 141, 52, 14, 87, 91, 61, 63,10];

function getEvenNumber(numbersArray){
    const evenNumber = [];
    for (let i = 0; i < numbersArray.length; i++){
        const numbers = numbersArray[i];
        if (numbers % 2 === 0) {
            evenNumber.push(numbers);
        }
    }
    return evenNumber;
}

function  getEvenNumberSum (numbersArray) {
    let sumEvenNumber = 0;
    const evenNumber = getEvenNumber (numbersArray);
    for( let i = 0; i < evenNumber.length; i++){
        console.log(evenNumber[i]);
        const number = evenNumber[i];
        sumEvenNumber += number;
    }
    return sumEvenNumber;
}


const evenNumberSum = getEvenNumberSum (numbers);
console.log(evenNumberSum);