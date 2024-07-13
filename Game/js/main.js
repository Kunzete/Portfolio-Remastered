$(document).ready(function() {
    const cells = $('[data-cell]');
    let isXTurn = true;

    cells.one('click', handleClick);

    function handleClick() {
        const cell = $(this);
        const currentClass = isXTurn ? 'X' : 'O';
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            setTimeout(() => {
                alert(`${currentClass} wins!`);
                resetGame();
            }, 200);
        } else if (isDraw()) {
            setTimeout(() => {
                alert('Draw!');
                resetGame();
            }, 200);
        } else {
            swapTurns();
        }
    }

    function placeMark(cell, currentClass) {
        cell.text(currentClass);
    }

    function swapTurns() {
        isXTurn = !isXTurn;
    }

    function checkWin(currentClass) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells.eq(index).text() === currentClass;
            });
        });
    }

    function isDraw() {
        return cells.toArray().every(cell => {
            return $(cell).text() === 'X' || $(cell).text() === 'O';
        });
    }

    function resetGame() {
        cells.text('').off('click').one('click', handleClick);
        isXTurn = true;
    }
});
