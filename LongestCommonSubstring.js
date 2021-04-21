var x = "abcdxyz";
var y = "abcd";

function longestcommonSubstring(x,y) {
		var memo = [...Array(x.length+1)].map(() => Array(y.length+1).fill(0));
    let maxLen = 0;
    
    for(var i=1; i<= x.length ; i++) {
     for(var j=1; j<= y.length ; j++) {
    		if(x[i-1] === y[j-1]) {
        	memo[i][j] = memo[i-1][j-1] + 1;
        }
      
      	maxLen = Math.max(maxLen, memo[i][j]);
      
    	}
    }
    
    return maxLen;
  
}

console.log(longestcommonSubstring(x,y)); //4