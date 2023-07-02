
// import { merge } from "../easy/Array/mergeSortedArray";
const moveZeros = require("../easy/Array/moveZeros");
describe('283. Move Zeroes', () => { 
    it('Input [0,1,0,3,12] should return [1,3,12,0,0]', () => {
        const a = [0,1,0,3,12]
        const res= moveZeros(a)
        

        expect(a).toEqual([1,3,12,0,0]);
    });
 });

