const ROTTEN = 0;
const FRESH = 1;
const EMPTY = -1;

var input = [
  [1, -1, 1], // 00 01 02
  [1, 0, -1], // 10 11 12
  [1, 1, 1], // 20 21 22
];

// preorder DFS
// function dfs(root) {
//   if (!root) return;

//   let stack = [];
//   stack.push(root);

//   while (stack.length != 0) {
//     let el = stack.pop();
//     console.log("el.data", el.data);
//     if (el.right) stack.push(el.right);
//     if (el.left) stack.push(el.left);
//   }
// }

// function convertTohash(i, j, col) {
//   return j + i * col;
// }

// function reverseHash(val, col) {
//   let i = Math.floor(val / col);
//   let j = Math.floor(val % col);

//   return [i, j];
// }

function rottenOrange(grid) {
  //1. identify the rotten elements store in stack
  let rotStack = [];
  let minutes = 0;
  let fresh = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (grid[i][j] === ROTTEN) {
        rotStack.push([i, j]);
      }
      if (grid[i][j] === FRESH) fresh++;
    }
  }

  //2. identify the potential neighbours which can be rotted
  const row_dir = [0, -1, 0, 1];
  const col_dir = [-1, 0, 1, 0];
  const map = {};
  while (rotStack.length != 0) {
    let el = rotStack.pop();
    console.log("rotstack", rotStack);
    minutes++;
    for (let i = 0; i < row_dir.length; i++) {
      let l_el = el[0] + row_dir[i];
      let r_el = el[1] + col_dir[i];

      if (l_el >= 0 && r_el >= 0 && l_el < grid.length && r_el < grid.length) {
        if (grid[l_el][r_el] === FRESH) {
          grid[l_el][r_el] = -100;
          rotStack.push([l_el, r_el]);
          fresh--;
          map[`${l_el + " " + r_el}`] = minutes;
        }
      }
    }
  }

  console.log("fresh", fresh);
  console.log("minutes", minutes);
  console.log("map", map);
}

rottenOrange(input);
