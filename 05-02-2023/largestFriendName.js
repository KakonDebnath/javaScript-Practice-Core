function getLargestFriend(friends) {
    let largestFriend = friends[0];
    for ( let i=0; i<friends.length; i++){
        const friend = friends[i];
        if (largestFriend.name.length < friend.name.length) {
            largestFriend = friend;
        }
    }
    return largestFriend
}
const friends = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:100},
    {name:'Debashis', age:35},
    {name:'Rakibul Hasan', age:70},
    {name:'Roni', age:26}
];
const largestFriend = getLargestFriend(friends);
console.log(largestFriend);
