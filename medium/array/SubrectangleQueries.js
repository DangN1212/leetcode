/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
    this.rectagleInner = [...rectangle];
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {

  for(let r = row1; r <= row2; r++){
      for(let c = col1; c <= col2; c++){
          this.rectagleInner[r][c] = newValue
      }
  }  
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectagleInner[row][col]
};
