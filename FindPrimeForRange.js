// find all prime till 25

function findAllPrime(limit) {
  // initially set all as prime

  var primeMap = new Array(limit).fill(1);

  for (var i = 2; i <= limit; i++) {
    if (primeMap[i]) {
      for (var mul = 2 * i; mul <= limit; mul += i) {
        primeMap[mul] = 0;
      }
    }
  }

  console.log("primeMap", primeMap);
}

findAllPrime(25);
// complexity -> n + n/2 + n/3 ...  nlogn