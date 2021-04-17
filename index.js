import { checkForWinner } from './winner.js'

// No Winner yet
const board1 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '1','2','_','_','_','_'],
    ['1', '2','2','_','1','_','_'],
];

// Winner = 1 on Diagonal left
const board2 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','1','1','_','_'],
    ['_', '_','1','2','2','_','_'],
    ['_', '1','2','2','2','1','_'],
    ['1', '2','2','1','1','2','_'],
];

// No Winner
const board3 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','2','2','_','_'],
    ['_', '_','1','1','2','1','_'],
    ['_', '1','2','2','1','1','_'],
    ['1', '2','2','1','1','2','_'],
];

// Winner = 2 on Vertical
const board4 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','2','_','_','_','_'],
    ['_', '_','2','1','1','_','_'],
    ['_', '1','2','2','1','_','_'],
    ['1', '2','2','1','1','2','_'],
];

//Winner = 1 on Horizontal
const board5 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','1','2','_','_','_'],
    ['_', '1','2','2','2','_','_'],
    ['1', '2','2','1','1','1','1'],
];

// Winner = 2 on Diagonal right
const board6 = [
    ['_', '_','_','_','_','_','_'],
    ['_', '_','_','_','_','_','_'],
    ['_', '_','2','_','1','_','_'],
    ['_', '_','1','2','2','1','_'],
    ['_', '1','2','2','2','1','_'],
    ['1', '2','2','1','1','2','_'],
];

function main() {
    let winner = 0;
    // Run the tests on the function with each board

    // No Winner for board 1
    winner = checkForWinner(board1);
    console.log(`Board 1 Winner: ${winner}`)

    // Winner is 1 on board 2
    winner = checkForWinner(board2);
    console.log(`Board 2 Winner: ${winner}`)

    // No Winner for board 3
    winner = checkForWinner(board3);
    console.log(`Board 3 Winner: ${winner}`)

    // Winner is 2 on board 4
    winner = checkForWinner(board4);
    console.log(`Board 4 Winner: ${winner}`)

    // Winner is 1 on board 5
    winner = checkForWinner(board5);
    console.log(`Board 5 Winner: ${winner}`)

    // Winner is 2 on board6
    winner = checkForWinner(board6);
    console.log(`Board 6 Winner: ${winner}`)
}

//Run the main function
main();
