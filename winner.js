/**
 * Checks to see if any player has won the game
 * 
 * @param {*} board The board to check a winner on
 * 
 * @returns string|undefined The player number of the winner or undefined if no winner
 */
export function checkForWinner( board ) {
    if( checkPlayerForWin( board, '1')) {
        return '1';
    } else if ( checkPlayerForWin( board, '2')) {
        return '2';
    } else {
        return undefined;
    }
}

/**
 * Check to see if the desired player has won the game
 * 
 * @param {string[][]} board The connect four board
 * @param {string} player The Player number
 * 
 * @returns bool True if that player won or false if not
 */
function checkPlayerForWin( board, player ) {
    // 4 possible directions for a win
    let diagonalLeftCount = 0;
    let diagonalRightCount = 0;
    let verticalCount = 0;
    let horizontalCount = 0;

    // Check each found value for possible win
    for( let row = 0; row < board.length; row++ ) {
        for( let col=0; col < board[row].length; col++ ) {
            if( board[row][col] === player ) {
                diagonalLeftCount = 1;
                diagonalRightCount = 1;
                verticalCount = 1;
                horizontalCount = 1;

                // check vertical
                let checkRow = row+1;
                let checkCol = col;
                let response = undefined;
                do {
                    response = checkNext( board, checkRow, checkCol, player );
                    if( response ) {
                        verticalCount++;
                        checkRow++;
                    } else {
                        verticalCount = 1;
                    }
                } while( response && verticalCount < 4 )

                if( verticalCount === 4 ){
                    return true;
                }

                // check horizontal
                checkRow = row;
                checkCol = col+1;
                response = undefined;
                do {
                    response = checkNext( board, checkRow, checkCol, player );
                    if( response ) {
                        horizontalCount++;
                        checkCol++;
                    } else {
                        horizontalCount = 1;
                    }
                } while( response && horizontalCount < 4 )

                if( horizontalCount === 4 ){
                    return true;
                }

                // check diagonal right
                checkCol = col+1;
                checkRow = row+1;
                response = undefined;
                do {
                    response = checkNext( board, checkRow, checkCol, player );
                    if( response ) {
                        diagonalRightCount++;
                        checkCol++;
                        checkRow++;
                    } else {
                        diagonalRightCount = 1;
                    }
                } while( response && diagonalRightCount < 4 )

                if( diagonalRightCount === 4 ){
                    return true;
                }

                // check diagonal left
                checkCol = col-1;
                checkRow = row+1;
                response = undefined;
                do {
                    response = checkNext( board, checkRow, checkCol, player );
                    if( response ) {
                        diagonalLeftCount++;
                        checkCol--;
                        checkRow++;
                    } else {
                        diagonalLeftCount = 1;
                    }
                } while( response && diagonalLeftCount < 4 )

                if( diagonalLeftCount === 4 ){
                    return true;
                }
            }
        }
    }

    return false;
}

/**
 * We are assuming that we will always be checking Vertical down, board is searched from top to bottom
 * 
 * @param {*} board The Current playing board
 * @param {*} row The row location to check
 * @param {*} col The column location to check
 * @param {*} player the Player to check for
 * 
 * @returns bool
 */
function checkNext( board, row, col, player) {
    let equals = false;

    if( row >= 0 && row < board.length) {
        if( col >= 0 && col < board[row].length) {
            equals = board[row][col] === player;
        }
    }
    
    return equals;
}
