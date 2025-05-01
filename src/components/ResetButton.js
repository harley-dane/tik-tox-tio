import { resetBoard } from './Board.js';
import { updateStatus } from './Status.js';
import { initialState } from '../data.js';

export const ResetButton = (buttonElement, boardContainer, board, isXTurn, statusElement, clickHandler) => {
    buttonElement.addEventListener('click', () => {
        board.splice(0, board.length, ...initialState());
        isXTurn.value = true;
        updateStatus(statusElement, "Player X's turn");
        resetBoard(boardContainer, clickHandler);
    });
};
