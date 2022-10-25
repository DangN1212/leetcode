//Link: https://leetcode.com/problems/plus-one/


// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].



/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //  const newArr = [];
    // return digits.s
    //  let i = digits.length;

    // for(let index = digits.length - 1; index >=0; index--){
         
    //     //  let temp = digits[index] + 1;
    //     if(digits[index] < 9){
    //         digits[index]++;

    //         return digits;
    //     }

    //     digits[index] = 0

    // }

    // digits.unshift(1);

    // return digits;
    const res = [...digits];
    res[res.length - 1]++
     for(let index = res.length - 1; index >=0; index--){
         
        //  let temp = res[index] + 1;
        if(res[index] === 10){
            res[index] = 0
            res[index -1 ] ++;

            if(index === 0){
                res.unshift(1);
            }
        }else{
            return res;
        }


    }


    return res;
};

module.exports = plusOne;