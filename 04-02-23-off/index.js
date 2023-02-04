
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

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
    //Write your code here
    //Don't forget to return
    if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
        return "Jim";
    } else if (marksOfDela > marksOfChinku && marksOfDela > marksOfJim) {
        return "Dela";
    } else {
        return "Chinku";
    }
}


const marksOfChinku = 77;
const marksOfDela = 99;
const marksOfJim = 84;
const topper = JimOrDelaOrChinku(marksOfChinku, marksOfDela, marksOfJim);
console.log(topper);