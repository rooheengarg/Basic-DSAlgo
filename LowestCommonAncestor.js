//      3
//      /\
//     2  5
//    /\
//   1  4
//   /   \
//   7   6
//      /\
//     8  9
//    /\
//   11  10

// LCA -> input two nodes, and return their converging path up the tree. eg. I/P: 11,7 , O/P : 2
// When path related sceanrios : DFS

function pathToNode(root, path, target) {
  if (!root) return;
  if (root.value === target) {
    console.log("Path", path);
    return;
  }
  pathToNode(root.left, [...path, root.value], target);
  console.log("path", path);
  pathToNode(root.right, [...path, root.value], target);
}


// 7: [3,2,1]
// 11: [3,2,4,6,8,11]
// tree -> n nodes -> O(n) ; space complexity => O(nlogn)

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (!left) return right  // p and q are in the right subtree
  if (!right) return left  // p and q are in the left subtree
  return root              // p is in one side and q is in the other
};
// 6
// / \
// 8  11
// / \
//   7
// 4
// \
//  9

// node fun(root , a,b){

// if(!root){
// return null
// }

// acknowledgment
// if( root->data.match[a,b])
// {
// return root;

// }

// lcal = [root->left,a,b]
// lca2= [root->right,a,b]
// if(lca1 && lca2){
// return root;
// }

// if(!lca1){
// return lca2
// }

// return lca1;

// }

// LCA // BST // DIAMETER
