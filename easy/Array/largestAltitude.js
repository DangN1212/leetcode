/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitude = [0];
    let maxAltitue = 0;
    for(let i = 0; i < gain.length; i++){
        const sum = altitude[altitude.length - 1] + gain[i];
        if(sum > maxAltitue){
            maxAltitue =  sum
        }
        altitude.push(sum)

    }

    return maxAltitue
};