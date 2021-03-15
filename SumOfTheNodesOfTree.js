//Give an algorithm for finding the sum of all elements in a binary tree.

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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

const newTree = new BinaryTree();
newTree.insert(15);
newTree.insert(10);
newTree.insert(20);
newTree.insert(8);
newTree.insert(12);
newTree.insert(20);
newTree.insert(16);
newTree.insert(25);

console.log("newTree", newTree);

function findSumOfNodes(root) {
  if (!root) return 0;

  return root.value + findSumOfNodes(root.left) + findSumOfNodes(root.right);
}

console.log(findSumOfNodes(newTree.root));
