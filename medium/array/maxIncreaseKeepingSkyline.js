/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let count = 0;
    for(let r = 0; r < grid.length; r ++){
        const maxRow = Math.max(...grid[r]);
        for(let c = 0; c < grid[r].length; c++){
            //Get maximum of row
            const maxCol =Math.max(...grid.map((e, i) =>  e[c]));
            const maxValue = maxCol > maxRow ? maxRow : maxCol
          count += Math.abs(grid[r][c] -maxValue )
        }
    }

    return count
};