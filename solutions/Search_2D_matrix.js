function search2DMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    if( m ===0  || n === 0) return false;

    if(target < matrix[0][0] || target > matrix[m-1][n-1]) {
        return false;
    }

    for(let i=0; i<m; i += 1) {
        if(target <= matrix[i][n-1]) {
            if(target === matrix[i][n-1]) {
                return true;
            } else if(matrix[i].indexOf(target) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(search2DMatrix( [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));