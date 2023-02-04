// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

// 10, 572.96
// 25 ,1432.39
// 199, 11401.86
// 1 radian = 180°/3.14159265359

function radianToDegree(radian) {
let degree = radian * 180 / 3.14159265359;
degree = parseFloat(degree.toFixed(2));
return degree;
}

const radian = 199;
const result = radianToDegree (radian);
console.log(result);