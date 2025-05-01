import { processMove } from '../components/GameLogic.js';
import { ResetButton } from '../components/ResetButton.js';

export const setupEvents = (boardContainer, resetButton, board, isXTurn, statusElement) => {
    const clickHandler = (event) => processMove(event, board, isXTurn, statusElement);
    ResetButton(resetButton, boardContainer, board, isXTurn, statusElement, clickHandler);
    return clickHandler;
};
