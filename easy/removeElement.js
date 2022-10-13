/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums = [], val) {
     //Solution 1
    // let indexUpdate = 0;
    // for (let indexArr = 0; indexArr < nums.length; indexArr++) {
    //     if(nums[indexArr] !== val){
    //         nums[indexUpdate] = nums[indexArr];
    //         // let temp = nums[indexArr];
    //         // nums[indexArr] = nums[indexUpdate]
    //         // nums[indexUpdate] = temp;
    //         indexUpdate++;
    //     }
        
    // }

    // return indexUpdate;

    //solution 2

    for (let index = 0; index < nums.length; index++) {
        if(nums[index]=== val){
            nums.splice(index,1);
            index--
        }

        
    }

    return nums.length
};

module.exports = removeElement;