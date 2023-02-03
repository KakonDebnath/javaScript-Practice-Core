/*
    //  Current Bill Checker
    1-100 Units= 5tk
    100-200 Units = 4tk
    200- 300 Units = 3tk
    300-above Units = 2tk

*/


function getCurrentBill(units) {
    let totalBill = 0;

    const first100Units = 5;
    const second100To200Units = 4;
    const third200To300Units = 3;
    const above300Units = 2;

    if (units <= 100) {
        totalBill = units * 5;
        return totalBill;
    }
    else if (units <= 200) {
        const first100UnitsCost = 100 * 5;
        const secondUnits = units - 100;
        totalBill = first100UnitsCost + (secondUnits * second100To200Units);
        return totalBill;
    }
    else if (units <= 300) {
        const first100UnitsCost = 100 * 5;
        const second100UnitsCost = (200 - 100) * 4;
        const third100UnitsCost = (units - 200) * 3;
        totalBill = first100UnitsCost + second100UnitsCost + third100UnitsCost;
        return totalBill;
    }
    else {
        const first100UnitsCost = 100 * 5;
        const second100UnitsCost = (200 - 100) * 4;
        const third100UnitsCost = (300 - 200) * 3;
        const above300UnitsCost = (units - 300) * 2;
        totalBill = first100UnitsCost + second100UnitsCost + third100UnitsCost + above300UnitsCost;
        return totalBill;
    }
}


const myUnits = 325;
const myBill = getCurrentBill(myUnits);
console.log(myBill);

