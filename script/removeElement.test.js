const removeElement = require("../easy/removeElement");

describe('test removeElement function', () => { 
    it('[3,2,2,3], 3 should return 2 and [2,2,_,_]', () => {
        const input = [3,2,2,3]
        const res = removeElement(input, 3);

        expect(res).toBe(2);
    });

    it('[0,1,2,2,3,0,4,2], 2 should return 5 and [0,0,1,3,4]', () => {
        const input = [0,1,2,2,3,0,4,2]
        const res = removeElement(input, 2);

        expect(res).toBe(5);
    });
 })