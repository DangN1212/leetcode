const searchInsert = require("../easy/searchInsertposition");

describe('searchInsertPosition function', () => {
    const input = [1,3,5,6];
    it('target is 5 - should return 2', () => {
        const result = searchInsert(input, 5);

        expect(result).toBe(2)
    });

    it('target is 2 - should return 1', () => {
        const result = searchInsert(input, 2);

        expect(result).toBe(1)
    });

    it('target is 0 - should return 0', () => {
        const result = searchInsert(input, 0);

        expect(result).toBe(0)
    });

    it('target is 7 - should return 4', () => {
        const result = searchInsert(input, 7);

        expect(result).toBe(4)
    });
});