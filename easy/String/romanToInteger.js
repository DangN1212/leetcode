/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s = '') {
    const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    // let total = 0;

    // for(let index = 0; index < ten.length; i++){
    //     if(s.includes(`${ten[index]}${ten[index + 1]}`) || s.includes(`${ten[index]}${five[index]}`)){
    //         let number = s.includes(`${ten[index]}${five[index]}`) ? 5: 1
    //         total = number * ten[index] * Math.pow(10, index) - Math.pow(10, index);
    //         s.replace()
    //     }else{
    //         s.includesten[index]
    //     }
    // }

    let ans = 0;
    for(let i = s.length -1; ~i; i--){
        let num = roman[s.charAt(i)];
        if(num * 4 < ans){
            ans -= num;
        }else{
            ans += num
        }
    }

    return ans
};



module.exports = romanToInt;