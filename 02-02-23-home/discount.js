/*
    // Hotel Bill 
    1. if you stand 10 days par cost 1000tk
    2. after 10-20 day par cost 800tk
    3. after 20 - above par cost 600tk 
*/

function getHotelBill(myDays) {
    const for10Days = 1000;
    const second10Days = 800;
    const dayAbove20 = 600;
    let totalCost = 0;

    if (myDays <= 10) {
        totalCost = myDays * for10Days;
        return totalCost;
    }
    else if (myDays <= 20) {
        const first10DaysCost = 10 * for10Days;
        const second10DaysCost = (myDays - 10) * second10Days;
        totalCost = first10DaysCost + second10DaysCost
        return totalCost;
    }
    else{
        const first10DaysCost = 10 * for10Days;
        const second10DaysCost = (20 - 10) * second10Days;
        const above20DaysCost = (myDays - 20) * dayAbove20;
        totalCost = first10DaysCost + second10DaysCost +above20DaysCost;
        return totalCost;
    }
    // return totalCost;
}

let myDays = 30;
const totalBill = getHotelBill(myDays);
console.log(totalBill);