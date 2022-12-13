const romanToInt = require("../easy/String/romanToInteger");

describe('romantoInt funciton', () => { 
    const input01 = "III";
    const input02 = "LVIII";
    const input03 = "MCMXCIV";
    it(`${input01} return 3 `, () => {
        const res  = romanToInt(input01);

        expect(res).toBe(3);
    });

    it(`${input02} return 58`, () => {
        const res  = romanToInt(input02);

        expect(res).toBe(58);
    });

    it(`${input03} return 1994`, () => {
        const res  = romanToInt(input03);

        expect(res).toBe(1994);
    });
 })