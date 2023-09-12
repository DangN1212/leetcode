/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //Sort 
 var frequencySort = function(nums) {
    const mapSize = new Map();

    for(let i =0; i< nums.length; i++){
        mapSize.set(nums[i],(mapSize.get(nums[i]) || 0)  + 1)
    }

    nums.sort((a,b) =>{
        if(mapSize.get(a) !== mapSize.get(b)){
            return mapSize.get(a) - mapSize.get(b)
        }else{
            return b -a
        }});

        return nums
};

module.exports = frequencySort