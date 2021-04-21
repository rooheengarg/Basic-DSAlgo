
var queue = []
bfs(root) {
 if(!root) return;
 queue.push(root);
 while(queue.length !=0) {
     var el = queue.dequeue();
         console.log(el.data);
        if(el.left) queue.enquque(el.left)
        if(el.right) queue.enquque(el.right)
 }


}

// time => O(n) (n as number of nodes)

// space => binary tree (n = 2^x
//         1
//         /\
//        2  3
//           /\
//        /\ 6  7
//        4 5
    
    
    
// rotten orange problem 

const ROTTEN = 0;
const FRESH = 1;
const EMPTY = -1;

var input = [
    [1,-1,1], // 00 01 02
    [1,0,-1], // 10 11 12
    [1,1,1].   // 20 21 22
]

1. Rotten index 
function getHash( i,j,col) {
    return (j)+i*col

}

// ( val = (j)+i*col)
// val%col = j + 0
//val/col = j/col + i

    

function reverseHash(val,col) {
    var i = val/col;
    var j = val%col;
    return [i,j];

}

    0 1 2
    3 4 5
    6 7 8
    
const q = [];

for(var i=1 to n) {
    for(var j=1 to n) {
          if( input[i][j] === ROTTEN) {
              q.push(getHash(i,j,n);
              }  
    }
}
  //  4
  //  /\
  //  3 7   
    
 // 2. how to find neighbours
 
 
 // x,y -> x+1,y
 // x-1, y 
 // x, y+1
 // x, y-1
     
     var timer = 0;
     var rottenCount = 0
     
      
    function treeSearch() {
    
        while(q.size() > 0) {
        n = q.size();
        timer++;
            while(n--) {
             var el = q.shift();
             rottenCount++
            var ptr = reverseHash(el);
            if(input[ptr[0]][ptr[1]-1] && input[ptr[0]][ptr[1]-1] === FRESH) {
                q.push(getHash(ptr[0],ptr[1]-1)
            }
             if(input[ptr[0]][ptr[1]+1] && input[ptr[0]][ptr[1]+1] === FRESH) {
                //
            }
             if(input[ptr[0]-1][ptr[1]] && input[ptr[0]-1][ptr[1]] === FRESH) {
                //
            }
             if(input[ptr[0]+1][ptr[1]] && input[ptr[0]+1][ptr[1]] === FRESH) {
                //
            }
            
            }
            
           
        
        }
    
    }
      
 rottenCount === freshCount ? true : false
             
              
     



// To traverse in all 8 directions 

//  for( x = -1 x<=1 x++){
//     for( y=-1 y<=1 y++){
    // if(x !== 0 && y !==0) {
        
    // }
//     }
// }       


























    