const numJewelsInStones = require("../easy/String/numJewelsInStones");

describe('771. Jewels and Stones', () => { 
    it('should return 3 jewels = aA and stones = aAAbbbb', () => {
        const res = numJewelsInStones("aA", "aAAbbbb")
        expect(res).toBe(3);
    });

    it('should return 0 jewels = z and stones = ZZ', () => {
        const res = numJewelsInStones("z", "ZZ")
        expect(res).toBe(0);
    });
})