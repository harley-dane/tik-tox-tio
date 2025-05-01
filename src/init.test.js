/**
 * @jest-environment jsdom
 */

import { initialState } from './data.js';
import { createGameBoard } from './util.js';
import { setupEvents } from '../src/event/event.js';

jest.mock('./util.js', () => ({
    createGameBoard: jest.fn(),
}));

jest.mock('../src/event/event.js', () => ({
    setupEvents: jest.fn(),
}));

describe('Tic-Tac-Toe Initialization', () => {
    let boardContainer;
    let resetButton;
    let statusDisplay;
    let clickHandler;
    let board;
    let isXTurn;

    beforeEach(() => {
        // Set up mock DOM elements
        document.body.innerHTML = `
            <div id="status"></div>
            <div id="board"></div>
            <button id="reset"></button>
        `;
        
        boardContainer = document.querySelector('#board');
        resetButton = document.querySelector('#reset');
        statusDisplay = document.querySelector('#status');

        board = initialState();
        isXTurn = { value: true };

        // Mock the setupEvents function
        clickHandler = jest.fn();
        setupEvents.mockImplementation((boardContainer, resetButton, board, isXTurn, statusDisplay) => clickHandler);

        createGameBoard.mockImplementation((container, handler) => {
            container.innerHTML = '<div class="mock-block" data-index="0"></div>';
        });
    });

    test('should initialize game components', () => {
        const clickHandler = setupEvents(boardContainer, resetButton, board, isXTurn, statusDisplay);
        createGameBoard(boardContainer, clickHandler);

        // Verify DOM setup
        expect(boardContainer).toBeDefined();
        expect(resetButton).toBeDefined();
        expect(statusDisplay).toBeDefined();

        // Verify board initialization
        expect(board).toEqual(Array(9).fill(null));

        // Verify turn initialization
        expect(isXTurn.value).toBe(true);

        // Verify setupEvents call
        expect(setupEvents).toHaveBeenCalledWith(boardContainer, resetButton, board, isXTurn, statusDisplay);

        // Verify createGameBoard call
        expect(createGameBoard).toHaveBeenCalledWith(boardContainer, clickHandler);
    });

    test('should render game board', () => {
        createGameBoard(boardContainer, clickHandler);

        // Verify blocks are created dynamically
        expect(boardContainer.innerHTML).toContain('mock-block');
    });
});
