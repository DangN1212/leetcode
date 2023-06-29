const buildArray = require("../easy/Array/buildArray");

describe('1920. Build Array from Permutation', () => { 
    it('input "[0,2,1,5,3,4]" should return [0,1,2,4,5,3]', () => {
        const res  = buildArray([0,2,1,5,3,4]);

        expect(res).toEqual([0,1,2,4,5,3]);
    });

    it('input "[5,0,1,2,3,4]" should return [4,5,0,1,2,3]', () => {
        const res  = buildArray([5,0,1,2,3,4]);

        expect(res).toEqual([4,5,0,1,2,3]);
    });

 })