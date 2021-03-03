// Depth first search using adjency matrix
// User will input number of nodes and edges matrix

let graphAdj;
let visited;
const initGraph = (maxVertex) => {
  graphAdj = new Array(maxVertex);
  visited = new Array(maxVertex);

  for (let i = 0; i < graphAdj.length; i++) {
    graphAdj[i] = new Array(maxVertex);
  }
  for (let i = 0; i < graphAdj.length; i++) {
    for (let j = 0; j < graphAdj[i].length; j++) {
      graphAdj[i][j] = 0;
    }
  }
  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }
};

const insertGraph = (a, b) => {
  for (let i = 0; i < graphAdj.length; i++) {
    for (let j = 0; j < graphAdj[i].length; j++) {
      if (i == a && j == b) {
        graphAdj[i][j] = 1;
        graphAdj[j][i] = 1;
      }
    }
  }
};

function dfs(node) {
  let stack = [];
  stack.push(node);

  while (stack.length != 0) {
    let curr = stack.pop();
    if (!visited[curr]) {
      visited[curr] = true;
      console.log("checked", curr);
      // traversal in a preorder way
      for (var i = graphAdj[curr].length - 1; i >= 0; i--) {
        if (graphAdj[curr][i] === 1) {
          stack.push(i);
        }
      }
    }
  }
}

initGraph(5);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(1, 3);
insertGraph(1, 4);

dfs(0);
