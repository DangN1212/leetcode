/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const ten = ["I", "X", "C", "M"];
    const five = ["V", "L", "D"];

    let total = 0;

    for(let index = 0; index < ten.length; i++){
        if(s.includes(`${ten[index]}${ten[index + 1]}`) || s.includes(`${ten[index]}${five[index]}`)){
            let number = s.includes(`${ten[index]}${five[index]}`) ? 5: 1
            total = number * ten[index] * Math.pow(10, index) - Math.pow(10, index);
            s.replace()
        }else{
            s.includesten[index]
        }
    }

    return total
};

romanToInt

module.exports = romanToInt;