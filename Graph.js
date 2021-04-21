 
 // 2D grid , type = [ 'obstacle', 'path', 'destination']
// [-1, 1,2]
// start: 1,1 (right, down) //Application of DFS

var input = [
    [1,-1,2],
    [1,2,-1],
    [2,1,1]
];
 
 
 matrix = [[]]
 const neighbours({ x,y}) => {
 const pairs = [ { x: x+1,y} , { x, y:y+1} ]
 const actual = []
 for ( each pair in pairs ){
 inside(pair) && ['delievry','path'].includes(matrix[pair.x][pair.y]) && actual.push(pair);
 }
 
 return actual;
 
 
 }
 
 const map = ( { x,y}) => return x*10000+y;
 let count = 0; 
 const myWork = (node) => if node is delievery loaton count++;
 
function dfs(node) {

visit[map(node)]=1;

const neigbours = neighbours(node);
myWork(node);

for( each neighbour in neigbours ){
if(!visit[map(neighbour)]) {
dfs(neighbour);
}
}

}




}

 
 
 
 
 
 
 
 