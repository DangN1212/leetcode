/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //indexUpdate always less than i
    let indexUpdate = 1;
    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
           
            if (indexUpdate !== i) {
                nums[indexUpdate] = nums[i];
            }
            indexUpdate++;
        }
    }

    return indexUpdate++;
};

removeDuplicates([1,2,2,3,3,4,4])



module.exports = removeDuplicates;
