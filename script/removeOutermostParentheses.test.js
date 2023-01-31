const removeOuterParentheses = require("../easy/String/removeOutermostParentheses");

describe('removeOutermostParentheses function', () => { 
    it('Input: s = "(()())(())" - Output: "()()()"', () => {
        const s = removeOuterParentheses("(()())(())")

        expect(s).toBe("()()()");
    });

    it('Input: s = "(()())(())(()(()))" - Output: "()()()()(())"', () => {
        const s = removeOuterParentheses("(()())(())(()(()))")

        expect(s).toBe("()()()()(())");
    });

    it('Input: s = "()()" - Output: ""', () => {
        const s = removeOuterParentheses("()()")

        expect(s).toBe("");
    });
 })
