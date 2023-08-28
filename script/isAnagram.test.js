const isAnagram = require("../easy/Array/isAnagram");

describe('242. Valid Anagram', () => { 
    it('input "anagram nagaram" should return true', () => {
        const res  = isAnagram("anagram","nagaram");

        expect(res).toBe(true);
    });



 })