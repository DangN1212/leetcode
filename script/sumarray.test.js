const twoSum = require("../sumarray/index")


describe('test sum func', () => { 


    it("test", () => {
        const res = twoSum([2,7,11,15], 9);

        expect(res).toStrictEqual([1,0]);
    })
 })