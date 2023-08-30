const restoreString = require("../easy/String/restoreString");
describe('1528. Shuffle String', () => {
  test('should return the original string when indices are in ascending order', () => {
    const s = 'abcde';
    const indices = [0, 1, 2, 3, 4];
    const result = restoreString(s, indices);
    expect(result).toBe('abcde');
  });

  test('should return the string with characters rearranged according to the indices', () => {
    const s = "codeleet";
    const indices = [4,5,6,7,0,2,1,3];
    const result = restoreString(s, indices);
    expect(result).toBe("leetcode");
  });

  test('should handle empty string', () => {
    const s = '';
    const indices = [];
    const result = restoreString(s, indices);
    expect(result).toBe('');
  });

  // Add more test cases to cover different scenarios

});