const sortedSquares = require("../easy/Array/squaresOfSortedArray.js");

describe('sortedSquares function', () => { 
    it('Input: nums = [-7,-3,2,3,11] should return [4,9,9,49,121]', () => {
        const output = sortedSquares([-7,-3,2,3,11]);
        expect(output).toEqual([4,9,9,49,121]);
    });

    it('Input: nums = [-4,-1,0,3,10] should return [0,1,9,16,100]', () => {
        const output = sortedSquares([-4,-1,0,3,10]);
        expect(output).toEqual([0,1,9,16,100]);
    });
 })