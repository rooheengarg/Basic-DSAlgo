// to check if a given tree is BST or not we need to check if element on left side
// is smaller than node and right is bigger

//case 1: !root return true
//case 2: only one element -> return true
//case 3:  3   f(root) = valid(root) && validBST(root.left) && validBST(root.right)
//         /\
//        1  5

// this is not gonna work correctly in case we have a tree like this
//      3
//      /\
//     2  5
//    /\
//   1  4
// http://collabedit.com/pexw3
function checkBST(root) {
  if (!root) return true;
  if (root.value && !root.left && !root.right) return true;

  let l_data = root.left ? root.left.value : null;
  let r_data = root.right ? root.right.value : null;

  return (
    root.value &&
    root.value > l_data &&
    root.value < r_data &&
    checkBST(root.left) &&
    checkBST(root.right)
  );
}

// tree construction
class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
    return this;
  }
}

const root_BST = new Node(3);
root_BST.left = new Node(2);
root_BST.right = new Node(5);
root_BST.left.left = new Node(1);
// root_BST.left.right = new Node(4);
// console.log("root_BST", root_BST);
// console.log("valid BST ? ", checkBST(root_BST));

//2: efficient and optimal solution
// the inorder traversal of a binary search tree gives a sorted order of its elements. We shall use this to our advantage and traverse the tree in inorder fashion

//      3 (3,null)
//      /\
// (2,3)2  5
//    /\
//(1,2)1  4

function checkBSTUsingInorder(root, prev) {
  if (!root) return true;

  let x1 = checkBSTUsingInorder(root.left, root);
  if (prev && prev.value > root.value) return false;
  console.log("root.value", root.value);
  let x2 = checkBSTUsingInorder(root.right, root);

  return x1 && x2;
}

// console.log(
//   "checkBSTUsingInorder",
//   checkBSTUsingInorder(root_BST, { value: -Infinity })
// );

//Method :3 passing constraint from root to children
// 2
// /\
//1  4

// {} => true
// {1} => true f(root) = (min <= root.value <= max)
// root.left -> (min, root.value - 1)
// root.right ->(root.value + 1, max)
// this is not gonna work correctly in case we have a tree like this
//        3 (-in , in)
//      /   \
//(-in, 2)2  5 (3, in)              5
//    /     \                       /\
// (-in, 1)1  4(3,3)           (3.5)4   7
//   /\
//  0  7

function checkBSTUsingConstraint(root, min, max) {
  if (!root) return true;

  let l_tree = checkBSTUsingConstraint(root.left, min, root.value - 1);
  let r_tree = checkBSTUsingConstraint(root.right, root.value + 1, max);

  // console.log("l_tree =>", l_tree);
  // console.log("r_tree =>", r_tree);
  // console.log("root.value =>", root.value);
  // console.log("min =>", min);
  // console.log("max =>", max);

  return min <= root.value && root.value <= max && l_tree && r_tree;
}

console.log(
  "checkBST ====>",
  checkBSTUsingConstraint(root_BST, -Infinity, Infinity)
);
