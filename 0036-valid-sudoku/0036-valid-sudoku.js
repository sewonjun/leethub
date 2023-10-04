/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const isThreeBlockValid = threeBlockSudoku(board);
    
    if (!isThreeBlockValid) return false;
    
    const isLeftBlockValid = leftBlockSudoku(board);
    
    if (!isLeftBlockValid) return false;

    const isRightBlockValid = rightBlockSudoku(board);

    if (!isRightBlockValid) return false;

    return true;
};


function threeBlockSudoku(board) {
    let result = true;
    let j = 0;
    
    while (j < 9) {
        if (!result) break;
    
        for (let i = 0; i < 9; i+=3) {
            if (!result) break;
            const sudokuDigits = [];

            sudokuDigits.push(...board[i].slice(j, j+3).filter((el) => el !== "."));
            sudokuDigits.push(...board[i + 1].slice(j, j+3).filter((el) => el !== "."));
            sudokuDigits.push(...board[i + 2].slice(j, j+3).filter((el) => el !== "."));

            const digitsFrequency = sudokuDigits.reduce((acc, cur) => {
                !acc[cur] ? acc[cur] = 1 : acc[cur]++

                return acc;
            },{});

            for (let frequency in digitsFrequency) {
                if (digitsFrequency[frequency] > 1) {
                    result = false;

                    break;
                }
            }  
        }
         

        j+=3
    }

    return result;
}

function leftBlockSudoku(board) {
    let result = true;

    for (let leftArray of board) {
        if (!result) break;

        const sudokuDigits = leftArray.filter(el => el !== ".");
        const digitsFrequency = sudokuDigits.reduce((acc, cur) => {
            !acc[cur] ? acc[cur] = 1 : acc[cur]++

            return acc;
        },{});

        for (let frequency in digitsFrequency) {
            if (digitsFrequency[frequency] > 1) {
                result = false;

                break;
            }
        }
    }

    return result
}

function rightBlockSudoku(board) {
    let result = true;
    let i = 0;

    while (i < 9) {
        if (!result) break; 

        const sudokuDigits = board.map(el => el[i]).filter(el => el !== ".");
        const digitsFrequency = sudokuDigits.reduce((acc, cur) => {
            !acc[cur] ? acc[cur] = 1 : acc[cur]++

            return acc;
        },{});

        for (let frequency in digitsFrequency) {
            if (digitsFrequency[frequency] > 1) {
                result = false;

                break;
            }
        }

        i++;
    }

    return result;
}
