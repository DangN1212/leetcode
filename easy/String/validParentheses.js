/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const splittedS = s.split("");

    for(let i = 0; i < splittedS.length; i++){
        if(splittedS[i] === "(" || splittedS[i] === "[" || splittedS[i] === "{"){
            stack.push(splittedS[i]);
            continue;
        }

        
        const stackLength = stack.length - 1;
        if(splittedS[i]=== ")" && stack[stackLength] === "("){
            stack.pop();
            continue
        }

        if(splittedS[i]=== "]" && stack[stackLength] === "["){
            stack.pop();
            continue
        }

        if(splittedS[i]=== "}" && stack[stackLength] === "{"){
            stack.pop();
            continue
        }

        stack.push("invalid");
        break;
    }

    return !stack.length
};

module.exports = isValid;