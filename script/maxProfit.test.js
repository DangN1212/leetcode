const maxProfit = require("../easy/Array/maxProfit");

describe('121. Best Time to Buy and Sell Stock', () => { 
    it('input "[7,6,4,3,1]" should return 0', () => {
        const res  = maxProfit([7,6,4,3,1]);

        expect(res).toBe(0);
    });

    it('input " [7,1,5,3,6,4]" should return 5', () => {
        const res  = maxProfit( [7,1,5,3,6,4]);

        expect(res).toBe(5);
    });

    it('input "[1,4,2]    " should return 3', () => {
        const res  = maxProfit([1,4,2]);

        expect(res).toBe(3);
    });

 })