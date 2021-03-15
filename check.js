function b_search(range, ask) {
  var l = range.left;
  var r = range.right;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    const dir = ask(mid);
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

//const arr = [2,3,4,5,7,8,9]
/* const range = {left: 0, right: 25} */
/* const target = 14; */

const ask = (pos, target) => {
  const value = pos * pos;
  if (value === target) {
    return 0;
  } else if (value > target) {
    return -1;
  } else {
    return 1;
  }
};

/* console.log(b_search(range, ask)); */

var count = 0;
for (var i = 0; i < 10; i++) {
  let range = {
    left: 0,
    right: i,
  };
  console.log("hi");
  if (
    true
    // b_search(range, (pos) => {
    //   ask(pos, i);
    // })
  ) {
    console.log("checkkk");
    count++;
  }
}
