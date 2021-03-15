function b_search(range, ask, target) {
  var l = range.left;
  var r = range.right;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    const dir = ask(mid, target);
    switch (dir) {
      case -1:
        r = mid - 1;
        break;
      case 1:
        l = mid + 1;
        break;
      case 0:
        return mid;
        break;
    }
  }

  return -1;
}

const ask = (pos, target) => {
  const value = arr[pos];
  if (value === target) {
    return 0;
  } else if (value > target) {
    return -1;
  } else {
    return 1;
  }
};

// assuming arr provided is in asc sorted manner
function printAllPairs(arr, target) {
  if (!arr || !arr.length || arr.length < 2) return;

  for (var i = 0; i < arr.length; i++) {
    let remainingSum = target - arr[i];
    let range = { left: i + 1, right: arr.length - 1 };
    let idx = b_search(range, ask, remainingSum);
    if (idx != -1) {
      console.log("Pair", arr[i], arr[idx]);
    }
    // for (var j = i + 1; j < arr.length; j++) {
    //   if (arr[j] === remainingSum) {
    //     console.log("Pair", arr[i], arr[j]);
    //   }
    // }
  }
}

// const arr = [3, 3, 3, 3];
const arr = [-1, 1, 5, 5, 7];
const target = 6;
printAllPairs(arr, target);
