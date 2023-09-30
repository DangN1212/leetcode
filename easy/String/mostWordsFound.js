/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = sentences[0].split(" ").length;

    for(let i = 0; i < sentences.length; i++){
        const sensSplit = sentences[i].split(" ");

        if(max < sensSplit.length){
            max = sensSplit.length
        }
    }

    return max
};