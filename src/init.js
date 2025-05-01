import { initialState } from './data.js';
import { createGameBoard } from './util.js';
import { setupEvents } from './event/event.js';

const boardContainer = document.querySelector('#board');
const resetButton = document.querySelector('#reset');
const statusElement = document.querySelector('#status');

const board = initialState();
const isXTurn = { value: true };

const clickHandler = setupEvents(boardContainer, resetButton, board, isXTurn, statusElement);
createGameBoard(boardContainer, clickHandler);
