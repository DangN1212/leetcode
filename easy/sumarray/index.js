/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashmap = {};
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(hashmap[diff] !== undefined){
            return [i, hashmap[diff]]
        }else{
            hashmap[nums[i]] = i
        }
    }
    
    return []
};

module.exports = twoSum;