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

initGraph(5);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(1, 3);
insertGraph(1, 4);

const bfs = (node) => {
  let qu = [];
  qu.push(node);

  while (qu.length != 0) {
    let curr = qu.splice(0, 1)[0];
    visited[curr] = true;
    console.log("visited =>", curr);
    for (var i = 0; i < graphAdj[curr].length; i++) {
      if (graphAdj[curr][i] === 1 && visited[i] === false) {
        qu.push(i);
      }
    }
  }
};

bfs(0);
