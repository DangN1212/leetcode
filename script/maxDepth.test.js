const maxDepth = require("../easy/String/maxDepth");

describe('maxDepth', () => { 
    it('input "(1+(2*3)+((8)/4))+1" should return 3', () => {
        const res  = maxDepth("(1+(2*3)+((8)/4))+1");

        expect(res).toBe(3);
    });

    it('input "(1)+((2))+(((3)))" should return 3', () => {
        const res  = maxDepth("(1)+((2))+(((3)))");

        expect(res).toBe(3);
    });
 })