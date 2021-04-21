// diameter of binary tree (max distance between leaf nodes)

//   root
//   /\
//   1 2
//   \  \
//    5  66
//    /\
//    9 10
//       /\
//      12 13
//          /\
//         40 50
//         /
//         111
// case {1} => return 0
// 1
// /\
// 2 3   f(root) = depth(left_subtree) + depth(right_subtree)
// tree construction
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.
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
root_BST.left.right = new Node(4);

function diameterOfTree(root) {
  if (!root) return 0;
  let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(root) {
    if (!root) return 0;

    let l_height = dfs(root.left);
    let r_height = dfs(root.right);

    // update the diameter
    diameter = Math.max(diameter, l_height + r_height);

    // update the largest number of edge so far
    return 1 + Math.max(l_height, r_height);
  }
}

console.log("diameter ->", diameterOfTree(root_BST));
