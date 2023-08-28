/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let i = 0;
    const mapOperator = {
        "--X": -1,
        "X--": -1,
        "++X": 1,
        "X++": 1
    }

    for(let index = 0; index< operations.length; index++){
        i += mapOperator[operations[index]]
    }
    return i
};