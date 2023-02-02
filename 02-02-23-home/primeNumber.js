function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
    // console.log(sqrtnum);
      var prime = num !== 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
let number = 17 ;
  const primeNumber= isPrime(number)
  console.log(primeNumber);