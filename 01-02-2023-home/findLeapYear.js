function findLeapYear(arrOfYears) {
    let leapYearIs = [];
    for (let i = 0; i < arrOfYears.length; i++) {
        const years = arrOfYears[i];
        if (((years % 400 === 0) || (years % 100 !== 0)) && ((years % 4) == 0)) {
            leapYearIs.push(years);
        }
    }
    return leapYearIs;
}


let leapYears = [2022, 1952, 2023, 2024, 2025, 2028, 2030, 2016, 2000, 2085];
// findLeapYear(leapYears);
const leapYear = findLeapYear(leapYears);
console.log(leapYear);
