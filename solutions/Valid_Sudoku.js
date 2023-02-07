function isValidSudoku(board) {
    function rowValid() {
        for(let i=0; i<9; i += 1) {
            for(let j=0; j<9; j += 1) {
                if(board[i][j] === ".") {
                    continue;
                } else if(board[i].indexOf(board[i][j]) === j) {
                    continue;
                } else {
                    return false;
                }
            }
        }
        return true;
    }

    function columnValid() {
        for(let j=0; j<9; j += 1) {
            const val = [];
            for(let i=0; i<9; i += 1) {
                if(board[i][j] !== '.') {
                    val.push(board[i][j]);
                }
            }
            if(val.every( (ele, i) => val.indexOf(ele) === i )) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    function blockValid() {
        let i=0, j=0;
        for(let k=0; k<9; k += 1) {
            const val = [];
            if(k !== 0 && k % 3 === 0) {
                i += 3;
                j=0;
            }
            for(let a=i ;a<i+3;a += 1) {
                for(let b=j;b<j+3;b += 1) {
                    if(board[a][b] !== ".") {
                        val.push(board[a][b]);
                    }
                }
            }
            if(val.every( (ele, index) => val.indexOf(ele) === index )) {
                j += 3;
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
    return rowValid() && columnValid() && blockValid();
}

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));