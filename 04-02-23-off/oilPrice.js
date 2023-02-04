// Problem 3:  oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 


// ●	প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// ●	প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// ●	প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function oilPrice(d, p, o) {
    const digel = 114;
    const patrol = 130;
    const octen = 135;
    const digelCost = digel * d; 
    const patrolCost = patrol * p; 
    const octenCost = octen * o; 
    let totalCost = digelCost + patrolCost + octenCost;
    return totalCost;
}


const digel = 0;
const patrol = 2;
const octen = 3;
const total = oilPrice (digel, patrol, octen);
console.log(total);