
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var pascalTriangle = function(numRows) {
    const ans = new Array(numRows);
for(let i = 0; i < numRows; i++){
    const rowArr = new Array(i);
    for(j = 0; j <= i; j++){
        
        if(j=== 0 || j === i){
            rowArr[j] = 1
        }else{
            rowArr[j] = ans[i-1][j-1] + ans[i-1][j]
        }

    }
        ans[i] = rowArr

}

return ans
};