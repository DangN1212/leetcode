const twoSum = require("../easy/Array/twoSum.js")


describe('two sum function', () => { 


    it("input [2,7,11,15], 9 - should return [0,1]", () => {
        const res = twoSum([2,7,11,15], 9);

        expect(res).toStrictEqual([0,1]);
    })
 })