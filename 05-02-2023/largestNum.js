// ●	এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।



// array এর বড় সংখ্যা নির্নয়
function getLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (largestNumber < numbers[i] ) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10, 21];
const result = getLargestNumber(numbers);
console.log(result);