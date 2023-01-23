
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums = []) {


    //Create new array - same size with nums element
    const newArr = new Array(nums.length)
    //index for start and end current array
    let iStart = 0, iEnd = nums.length -1;

    //loop the array, start from the end,
    // compare with the start of array, get the greater, then update value to new array
    for(let i = nums.length -1; i>=0; i--){
        if(Math.abs(nums[iEnd])  > Math.abs(nums[iStart])){
            newArr[i] = Math.pow(nums[iEnd], 2);
            iEnd--
        }else{
            newArr[i] = Math.pow(nums[iStart], 2);
            iStart++
        }
    }

    return newArr
};

module.exports = sortedSquares