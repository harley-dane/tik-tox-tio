export const initialState = () => Array(9).fill(null);

export const checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c])
        ? board[winningCombinations.find(([a, b, c]) => board[a] === board[b] && board[a] === board[c])[0]]
        : null;
};
