// A tree is said to be identical if the values of corresponding left right node have same values
// and they have the same number of children and leaf nodes

// case 1 -> !root1 !root2 return true
// case 2 -> root1.data === root2.data true
// case 3 -> f(root1, root2) =f(root1, root2) && f(root1.left, root2.left) && f(root2.right, root2.right)

//      1       1
//      /\      /\
//     3  4    3  4

function checkIfIdentical(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  let l_data = checkIfIdentical(root1.left, root2.left);
  let r_data = checkIfIdentical(root1.right, root2.right);

  return root1.value === root2.value && l_data && r_data;
  // Check if both the trees are empty
  //   if (!root1 && !root2) return 1;
  //   else if (root1 != null && root2 == null) return 0;
  //   else if (root1 == null && root2 != null) return 0;
  //   else {
  //     // Check if current data of both trees equal
  //     // and recursively check for left and right subtrees
  //     if (
  //       root1.value == root2.value &&
  //       checkIfIdentical(root1.left, root2.left) &&
  //       checkIfIdentical(root1.right, root2.right)
  //     )
  //       return 1;
  //     else return 0;
  //   }
}

// Tree construction
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
// newTree.insert(10);
// newTree.insert(20);
// newTree.insert(8);
// newTree.insert(12);

const newTree2 = new BinarySearchTree();
newTree2.insert(15);
// newTree2.insert(10);
// newTree2.insert(20);
// newTree2.insert(8);
// newTree2.insert(12);

console.log(checkIfIdentical(newTree.root, newTree2.root));
