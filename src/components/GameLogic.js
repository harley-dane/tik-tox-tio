import { checkWinner } from '../data.js';
import { updateStatus } from './Status.js';

export const processMove = (event, board, isXTurn, statusElement) => {
    const index = event.target.dataset.index;
    if (!board[index] && !checkWinner(board)) {
        board[index] = isXTurn.value ? 'X' : 'O';
        event.target.textContent = board[index];

        const winner = checkWinner(board);
        if (winner) {
            updateStatus(statusElement, `Player ${winner} wins!`);
        } else if (board.every(Boolean)) {
            updateStatus(statusElement, "It's a draw!");
        } else {
            isXTurn.value = !isXTurn.value;
            updateStatus(statusElement, `Player ${isXTurn.value ? 'X' : 'O'}'s turn`);
        }
    }
};
