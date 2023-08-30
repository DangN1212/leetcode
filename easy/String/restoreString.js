/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const newS = [];

    for(let i = 0; i < indices.length; i++){
        newS[indices[i]] = s[i]

    }

    return newS.join("")
};

module.exports = restoreString;