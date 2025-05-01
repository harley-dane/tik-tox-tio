import { createGameBoard } from '../util.js';

export const Board = (container, clickHandler) => {
    createGameBoard(container, clickHandler);
};

export const resetBoard = (container, clickHandler) => {
    container.innerHTML = '';
    Board(container, clickHandler);
};
