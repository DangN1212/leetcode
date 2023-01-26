const isValid = require("../easy/String/validParentheses.js");

describe('validParentheses function', () => { 
    it('input () - should return true', () => {
        const res = isValid("()");

        expect(res).toBeTruthy();
    });

    it('input ()[]{} - should return true', () => {
        const res = isValid("()[]{}");

        expect(res).toBeTruthy();
    });

    it('input }] - should return false', () => {
        const res = isValid("}]");

        expect(res).toBeFalsy();
    });
 })