const frequencySort = require("../easy/Array/frequencySort");

describe('1636. Sort Array by Increasing Frequency', () => { 
    it("should return [3,1,1,2,2,2] when nums = [1,1,2,2,2,3]", () => {
        const res = frequencySort([1,1,2,2,2,3])
        expect(res).toEqual([3,1,1,2,2,2]);
    })
 })