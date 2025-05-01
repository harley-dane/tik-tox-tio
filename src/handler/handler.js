import { GameLogic } from '../components/GameLogic.js';

export const handleClick = (event, board, isXTurn, status) => {
    const game = new GameLogic(board, isXTurn, status);
    game.processMove(event);
};
