const removeDuplicates = require("../easy/removeDuplicates");

describe('test removeDuplicate with correct output', () => { 
    const input01 = [1,2];
    const input02 = [1,2,2];
    const input03 = [1];
    const input04 = [1,2,2,3,3];

    it('[1,2] - should return 2 and [1,2]', () => {
        const output01 = removeDuplicates(input01);
        expect(output01).toBe(2);

    });

    it(" [1,2,2] - should return 2 and [1,2,2]", () => {
        const output02 = removeDuplicates(input02);

        expect(output02).toBe(2);

    })

    it(' [1] should return 1', () => {
        const output03 = removeDuplicates(input03);
        expect(output03).toBe(1);


        
    });
    it('[1,2,2,3,3] should return 3 and [1,2,3,2,3]', () => {
        const output04 = removeDuplicates(input04);
        expect(output04).toBe(3);

    });

    it('[0,0,1,1,1,2,2,3,3,4] - should return nums [0,1,2,3,4,0,11,2,3]', () => {
        const input = [0,0,1,1,1,2,2,3,3,4];

        const result  = removeDuplicates(input);
        expect(result).toBe(5);

    });

    it("[1,1,2] - should return 2 and [1,2,1]", () => {
        const input = [1,1,2];

        const result  = removeDuplicates(input);
        expect(result).toBe(2);

    });

    it('[1,2,2,3,3,4,4] ', () => {
        const input = [1,2,2,3,3,4,4];

        const result  = removeDuplicates(input);

    });
 })