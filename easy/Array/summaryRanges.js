/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ans = [];
    let i = 0;
    while(i < nums.length ){
        let start, end;
        start = nums[i];
        while(i+1 < nums.length && nums[i]+1 === nums[i+1]){
            i++;
        }
        end = nums[i];
        if(start===end){
            ans.push(nums[i].toString())
        }else{
            ans.push(start + "->" + end)
        }
        i++
    }
   
    return ans

   };

   module.exports = summaryRanges