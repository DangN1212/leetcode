const summaryRanges = require("../easy/Array/summaryRanges");

describe('summaryRanges', () => { 
    it('input [0,1,2,4,5,7] should return ["0->2","4->5","7"]', () => {
        const res  = summaryRanges([0,1,2,4,5,7]);

        expect(res).toEqual(["0->2","4->5","7"]);
    });
 })