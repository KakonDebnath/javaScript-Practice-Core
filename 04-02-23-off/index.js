
function getYoungestFriend(friends) {
    let youngestFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[0].age > friends[i].age) {
            youngestFriend = friends[i];
        }
    }
    return youngestFriend;
}

const friends = [
    { name: "habib", age: 20, },
    { name: "Rakib", age: 25, },
    { name: "Labib", age: 29, },
    { name: "Labib", age: 19, },
];

const youngestFriend = getYoungestFriend(friends);
console.log(youngestFriend);



