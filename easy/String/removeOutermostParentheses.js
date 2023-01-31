/**
 * Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" && count ==0 ){
            count++;
            continue
        }
        if(s[i]=== "(" && count >0){
            count++;
            result += s[i];
            continue
        }
        if(s[i] === ")" && count==1){
            count--;
            continue
        }
         if(s[i] === ")" && count>1){
            count--;
            result += s[i]
        }
    }
    return result
};

module.exports = removeOuterParentheses;