const countMatches = require("../easy/Array/countMatches");

describe('1773. Count Items Matching a Rule', () => { 
    it('should return 2 when input is items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"', () => {
        const res = countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")
        expect(res).toBe(2);
    });


})