/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    //Set the default ruleKey - index 
    const mapKeyI = {
        type: 0,
        color: 1,
        name: 2
    }
    // const mapKeyI = new Map();
    // mapKeyI.set("type", 0)
    // mapKeyI.set("color", 1)
    // mapKeyI.set("name", 2)
    //Init default counter = 0;
    //Loop through items, at each item, check the value by getting the items[mayKeyI[ruleKey]] equal with rule Value or not
    let counter = 0;
    for(let i =0; i<items.length; i++){
        if(items[i][mapKeyI[ruleKey]] === ruleValue){
counter++
        }
    }
    return counter
};

module.exports = countMatches