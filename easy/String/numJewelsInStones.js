/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelSplit = jewels.split("");

    return stones.split("").reduce((previousValue, currentElement)=>{
        
        jewels.includes(currentElement) && previousValue++
        return previousValue
    }, 0)
};

module.exports = numJewelsInStones;