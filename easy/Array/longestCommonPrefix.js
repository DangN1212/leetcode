/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // let longest = ""

    // let minLength = strs[0].length

    // for(let i = 0; i<strs.length; i++){
    //     minLength = Math.min(minLength, strs[i].length)
    // }

    // for(let k = 0; k < minLength; k++){
    //     let current = strs[0][k];

    //     for(let j = 0; j<strs.length; j++){
    
    //         if(strs[j][k] !== current){
    //             return longest
    //         }else{
                
    //         }
    //     }
    //     longest +=current

        
    // }
    // return longest
    if (strs.length === 0) {
        return '';
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return '';
            }
        }
    }
    
    return prefix;
};