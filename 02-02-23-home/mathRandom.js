function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(1000));
  // Expected output: 100-999
  
  console.log(getRandomInt(100));
  // Expected output: 10-99
  
  console.log(getRandomInt(10));
  // Expected output: 0-9
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1