// JavaScript Program to Calculate the Area of a Triangle


// Example 1: Area When Base and Height is Known

// area = (base * height) / 2

// const baseValue = 4;
// const heightValue = 6;

// // calculate the area
// const areaValue = (baseValue * heightValue) / 2;

// console.log("The Area of Triangle is: " + areaValue);


// Example-2
// একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

// মনেকরি, ABC একটি বিষমবাহু ত্রিভুজ যার বাহু তিনটির দৈর্ঘ্য যথাক্রমে a একক, b একক, c একক; অর্ধ-পরিসীমা s একক এবং ক্ষেত্রফল A বর্গ একক। তাহলে, বিষমবাহু ত্রিভুজের ক্ষেত্রফলের সূত্র,
// A =√s(s - a)(s - b)(s - c) বর্গ একক; 
// যেখানে s = (a + b + c) / 2 


// function getAreaOfTriangle(side1, side2, side3) {
//     // calculate the semi-perimeter 
//     const s = (side1 + side2 + side3) / 2;

//     //calculate the area
//     const areaValue = Math.sqrt(
//         s * (s - side1) * (s - side2) * (s - side3)
//     );
//     return areaValue;
// }

// const side1 = 3;
// const side2 = 4;
// const side3 = 5;
// const areaOfTriangle = getAreaOfTriangle(side1, side2, side3);
// console.log("The Triangle Area is: " + areaOfTriangle);