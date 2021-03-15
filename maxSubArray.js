// gIVEN AN ARRAY OF ELEMENTS FIND THE MAX SUBARRAY COMPUTING THE MAXIMUM SUM

// var input = [1, 12, -5, -6, 50, 3];
var input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// expected output: [12,-5,-6,50];

//1. brute force approach to understand whats happening
function findmaxSubarray(arr) {
  if (!arr) return [];

  let left = 0;
  let right = arr.length - 1;
  var max_sum = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    let sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum > max_sum) {
        max_sum = sum;
        left = i;
        right = j;
      }
    }
  }

  console.log("max sum:", max_sum);
  console.log("right:", right);
  console.log("left:", left);
}

// findmaxSubarray(input);

//2. use Kadane's algorithm

function kadaneImplementation(arr) {
  let currSum = 0;
  let maxSum = 0;

  for (var i = 0; i < arr.length; i++) {
    currSum = Math.max(0, currSum + arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }

  console.log("maxSum", maxSum);
}

kadaneImplementation([-2, -1, -3, -4, -1, -2, -1, -5, -4]);
