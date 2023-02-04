// ●	1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
/* 
    // ●	৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে। 

    // function getTable(number) {
    //     let namta = "";
    //     for (let i = 1; i <= 10; i++){
    //         console.log(namta = number + " * " +  i + " = "+ number * i);
    //     }
    //     // return namta;
    // }

    // let number = 3;
    // getTable (number); 
    // const multiplicationTable = getTable (number);
    
    // console.log(multiplicationTable);
*/

/* 

    // ●	এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

    // ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

    // আউটপুটঃ 3 


    function getCounter(arr) {
        let count = 0;
        for ( let i = 0; i < arr.length; i++){
            if(arr[i] > 5){
                count++;
            }
        }
        return count;
    }
    const array =  [62, -1,2,-3,4,5,6,-7,8,-9,10,15]; 
    const counterNumber = getCounter(array);
    console.log(counterNumber);
 */


/*     
    // ●	তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

    function getReverseLargeFriendName(f1, f2) {
        let largestFriend = "";
        if(f1.length > f2.length){
            largestFriend = f1.split("").reverse().join("");
            return largestFriend;
        }else{
            largestFriend = f2.split("").reverse().join("");
            return largestFriend;
        }
    }
    const friend1 = "Simul Da";
    const friend2 = "Debashis Da";
    const reverseLargeFriendName = getReverseLargeFriendName (friend1, friend2);
    console.log (reverseLargeFriendName); 
*/

/*
    // ●	এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে। 

    function getLitter(millerites) {
        return millerites / 1000;
    }

    let millerites = 6520;
    const litter = getLitter (millerites);
    console.log(litter);
 */

 
// ●	একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
//  	অব্জজেক্টটি/Input দেখতে এমনঃ


//  

// function getYoungestFriend(friends) {
//     let youngestFriend = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[0].age > friends[i].age) {
//             youngestFriend = friends[i];
//         }
//     }
//     return youngestFriend;
// }

// const friends = [
//     { name: "habib", age: 20, },
//     { name: "Rakib", age: 25, },
//     { name: "Labib", age: 29, },
//     { name: "Labib", age: 19, },
// ];

// const youngestFriend = getYoungestFriend(friends);
// console.log(youngestFriend);

