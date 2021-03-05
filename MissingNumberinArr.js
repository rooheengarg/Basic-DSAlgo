// Problem statement is to find missing number in array
// given array will be from 1-n n being the length of array
// eg. [1,2,4,5] output must be

var arr = [1, 2, 4, 5, 6];

function findMissingNum(arr) {
  var n = arr.length;

  var x1 = arr[0]; // XOR of all the elements from 1 to n
  var x2 = 1; // XOR of all the elements from 1 to n+1

  for (var i = 1; i < n; i++) {
    x1 = x1 ^ arr[i];
  }

  for (var i = 2; i <= n + 1; i++) {
    x2 = x2 ^ i;
  }

  return x1 ^ x2;
}

console.log(findMissingNum(arr));
