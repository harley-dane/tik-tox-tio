export const createGameBoard = (container, clickHandler) => {
    container.innerHTML = '';
    Array.from({ length: 9 }).forEach((_, index) => {
        const block = document.createElement('div');
        block.classList.add('block');
        block.dataset.index = index;
        block.addEventListener('click', clickHandler);
        container.appendChild(block);
    });
};
