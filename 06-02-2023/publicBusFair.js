// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে । প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

// উদাহরণ-১ঃ

//  যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// উদাহরণ-২ঃ

//  যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।



// Sample Data
// Input	Output
// 50, 
// 55, 
// 112, 
// 235, 
// 365	0
// 1250
// 250
// 500
// 1000

function getAmount(participants) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusRate = 250;

    let extraParticipants = 0;

    extraParticipants = participants % busCapacity;

    if (extraParticipants >= 11){
        extraParticipants = extraParticipants % microBusCapacity;
    }
    const costForPublicBus = extraParticipants * publicBusRate;
    return costForPublicBus;
    
}
const participants = 60;
const totalAmount = getAmount(participants);
console.log(totalAmount);