const interpret = require("../easy/String/interpret");

describe('1678. Goal Parser Interpretation', () => { 
    it('should return Goal command = G()(al)', () => {
        const res = interpret("G()(al)")
        expect(res).toBe("Goal");
    });


})