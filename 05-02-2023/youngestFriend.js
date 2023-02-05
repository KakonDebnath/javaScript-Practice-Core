function getLargestFriend(friends) {
    let youngestFriend = friends[0];
    for ( let i=0; i<friends.length; i++){
        const friend = friends[i];
        if (youngestFriend.age > friend.age) {
            youngestFriend = friend;
        }
    }
    return youngestFriend
}

const friends = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:100}
];

const largestFriend = getLargestFriend(friends);
console.log(largestFriend);
