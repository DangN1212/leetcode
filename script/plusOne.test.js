const plusOne = require("../easy/plusOne");

describe('plusOne function', () => { 
    it('input [1,2,3] return [1,2,4]', () => {
        const res = plusOne([1,2,3]);

        expect(res).toEqual([1,2,4])
    });

    it('input [1,2,9] return [1,3,0]', () => {
        const res = plusOne([1,2,9]);

        expect(res).toEqual([1,3,0])
    });
    it('input [9] return [1,0]', () => {
        const res = plusOne([9]);

        expect(res.join(',')).toBe("1,0")
    });

    it('input [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] return [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
        const res = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

        expect(res).toEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4])
    });
 })