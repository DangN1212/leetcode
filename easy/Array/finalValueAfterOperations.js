/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((currentValue, currentElement)=>{
        if(currentElement === "++X" || currentElement === "X++"){
            currentValue +=1
        }else{
            currentValue -=1
        }

        return currentValue
    }, 0)
};