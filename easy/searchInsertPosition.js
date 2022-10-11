/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {

//    const length = nums.length

//     if(nums[length - 1] < target){
//         return length 
//     }

//     for(let i = 0; i< length; i++){
//         if(nums[i] === target){
//             return i;
//         }   

//         if(target < nums[i]){
//             return i;
//         }

//         if(nums[i] < target && nums[i+1] > target){
//             return i+1
//         }
//     }

//     return length;

    // let middle;
    // let left = 0;
    // let right = nums.length;

    // while(left < right){
    //     middle = Math.ceil(right/2);
    //     if(nums[middle] === target){
    //         return nums[middle];
    //     } 

    //     if(nums[middle] > target){

    //     }
    // }

    if(nums.includes(target)){
        return nums.findIndex(target);
    }

    nums.push(target);
    nums.sort((a,b)=> a - b);
    return nums.indexOf(target)
};

console.log(searchInsert([1,3,5,6], 5))
module.exports = searchInsert;