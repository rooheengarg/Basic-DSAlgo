//Give an algorithm for finding the height of tree.

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const newTree = new BinarySearchTree();
newTree.insert(15);
newTree.insert(10);
newTree.insert(20);
newTree.insert(8);
newTree.insert(12);

//         15(1,0) => 2
//         /\
// (0+0)10    20(0)
//     /\
//    (0)8  12(0)

// this is a bottom up approach where we calculate height using height = 1 + max(left_subtree , right_subtree)
function heightOfTree(root) {
  if (!root) return -1;

  let LTree = heightOfTree(root.left);
  // console.log("Ltree =>", LTree);
  let RTree = heightOfTree(root.right);
  // console.log("Rtree =>", RTree);

  // if (LTree > RTree) {
  //   console.log("hey in L =>", LTree);
  //   return LTree + 1;
  // } else {
  //   console.log("hey in R =>", RTree);
  //   return RTree + 1;
  // }

  //above commented code can also be written as
  return Math.max(LTree, RTree) + 1;
}

console.log(heightOfTree(newTree.root));
