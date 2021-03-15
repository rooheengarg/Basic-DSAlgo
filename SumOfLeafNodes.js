//Give an algorithm for finding the sum of all leaf nodes in a binary tree.

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
newTree.insert(16);
newTree.insert(25);

let s = 0;
function findSomeOfLeafNodes(root) {
  console.log("root =>", root);
  console.log("sum ini=>", s);
  if (!root) return 0;

  if (!root.left && !root.right) {
    s += root.value;
  }

  console.log("sum fin=>", s);
  findSomeOfLeafNodes(root.left);
  findSomeOfLeafNodes(root.right);

  return s;
}

console.log("result =>", findSomeOfLeafNodes(newTree.root, 0));
