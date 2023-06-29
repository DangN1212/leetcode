/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // const ans =  [];
    // const indexArr = [];
    // for(let i =0; i< nums.length; i++){
    //     indexArr.push(nums[i])
    // }

    // for(let i = 0; i< indexArr.length; i++){
    //     ans.push(nums[indexArr[i]]);

    // }

    // return ans

return    nums.map((value, index, arr) => {
        value = arr[value];

        return value
    })
};

module.exports = buildArray