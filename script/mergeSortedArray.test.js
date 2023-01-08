import { merge } from "../easy/Array/mergeSortedArray";

describe('mergeSortedArray function', () => { 
    it('should return [1,2,2,3,5,6]. Input nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 ', () => {
        const nums1 = [1,2,3,0,0,0], nums2 = [2,5,6];
        const m = 3,  n = 3;
        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1,2,2,3,5,6]);
    });

    it('Output: [1]. Input: nums1 = [1], m = 1, nums2 = [], n = 0 ', () => {
        const nums1 = [1], nums2 = [];
        const m = 1,  n = 0;
        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1]);
    });
 });

