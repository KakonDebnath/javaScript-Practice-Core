function getLongestString (arr){
    let longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(longest.length < arr[i].length){
        longest = arr[i];
      }
    }
    return longest;
}

const arr = [
    'first item',
    'second item is longer than the third one',
    'Dhaka Is the Largest City Of Bangladesh. It\'s the Capital of bangladesh',
    'third longish item'
  ];

let long = getLongestString (arr);
long = long.toUpperCase();

console.log(long, long.length);