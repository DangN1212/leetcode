const singleNumer = require("../easy/Array/singleOne");

describe('136. Single Number', () => { 
    it('input "[2,2,1]" should return 1', () => {
        const res  = singleNumer([2,2,1]);

        expect(res).toEqual(1);
    });

    it('input "[4,1,2,1,2]" should return 4', () => {
        const res  = singleNumer([4,1,2,1,2]);

        expect(res).toEqual(4);
    });

 })