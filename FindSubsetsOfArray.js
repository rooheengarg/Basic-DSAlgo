// [ 1, 2, 3]

//  000 {} 0
//  001. {1} 1
//  010 {2}2 
//  011 {1,2}3
//  100 {3}4
//  101 {1,3}
//  110 {2,3}
//  111. {1,2,3} 7 [0-(2^n)-1]
 
//  2^n*timeof_complexity_task_perform
 
//  for( int i= 0; i<2^n; i++) {
//  binarystring = i.toBinary();
//  temp = []
//  for( each char in binarystring) {
//  char == '1' ? temp.push(arr[c.toPos]):''
//  }
//  op(temp)
//  }

// Recursive solution
function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}

//Lexogrphic solution 

function findSubset(nums) {
    if(!nums) return;
    let arraySize = nums.length;
    let powerset = [];
    let powerSetLen = 2**arraySize;

    powerset.push([]);
    // loop over binary representation of all the binary combinations
    for(var i=1; i < powerSetLen; i++ ) {
        let binaryString = i.toString(2);
        while(binaryString.length < arraySize) {
            binaryString = "0" + binaryString;
        }
        let temp = [];
        console.log('binaryString', binaryString);
        console.log('binaryString len', binaryString.length);
        for(var k = 0; k < binaryString.length ; k++) {
            if(binaryString[k] === '1') {
                temp.push(nums[k]);
            }
        }
        powerset.push(temp);
    }

    return powerset;
}

console.log(findSubset([1,2,3]));