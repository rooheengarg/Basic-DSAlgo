// Given array of elements , need to find if there are three elements which can sum to the given target
// eg. arr = [2,4,10,5,1] target = 15 , return yes

var arr = [5, 4, 10, 6, 1];
var target = 14;

function checkSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    var map = {};
    for (var j = i + 1; j <= arr.length - 1; j++) {
      let remaining_sum = target - (arr[i] + arr[j]);
      if (map[remaining_sum]) {
        console.log([arr[i], arr[j], remaining_sum]);
        return;
      } else {
        map[arr[j]] = 1;
      }
    }
  }
}

checkSum(arr, target);
