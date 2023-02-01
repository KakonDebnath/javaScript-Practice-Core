function isVowelOrConsonant(letter) {
    //Write Your solution Here
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return "Vowel";
    }
    else {
        return "Consonant";
    }
};

let myLetter = "p";
const vowelOrConsonant = isVowelOrConsonant(myLetter);
console.log(vowelOrConsonant);
