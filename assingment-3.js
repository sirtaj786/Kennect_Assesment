function checkPrime(x) {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function nextPrime(x) {
  
    let nextprime_Number = x + 1;
  
    while (!checkPrime(nextprime_Number)) {
      nextprime_Number;
    }
    return nextprime_Number
  }
  function print(x) {
    let diffrence = nextPrime(x)
    if (checkPrime(x)) {
      console.log(`${x} is a prime number` + "\n" + "Difference between  Next prime number and num:", diffrence - x)
    } else {
  
      console.log(`${x} is not a prime number` + "\n" + `Difference between  Next prime number and ${x} is:${diffrence - x}`)
  
    }
  
  }
  
  print(4)