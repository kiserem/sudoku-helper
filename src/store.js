import { createStore} from "redux";
import selectValueReducer from "./reducers";

function build_pencil_board(block, row, column) {
    return {
        sudoku_block: block,
        sudoku_row: row,
        sudoku_column: column,
        cell_value: null,
        pencil_1: 1,
        pencil_2: 2,
        pencil_3: 3,
        pencil_4: 4,
        pencil_5: 5,
        pencil_6: 6,
        pencil_7: 7,
        pencil_8: 8,
        pencil_9: 9,
    };
}

function build_cell(block, row, column) {
    return {
        sudoku_block: block,
        sudoku_row: row,
        sudoku_column: column,
        pencil_board: build_pencil_board(block, row, column)
    };
}

function build_board(block, block_row, block_column) {
    return {
        sudoku_block: block,
        sudoku_block_row: block_row,
        sudoku_block_column: block_column,
        cells: [
            build_cell(block, (block_row + 1), (block_column + 1)),
            build_cell(block, (block_row + 1), (block_column + 2)),
            build_cell(block, (block_row + 1), (block_column + 3)),
            build_cell(block, (block_row + 2), (block_column + 1)),
            build_cell(block, (block_row + 2), (block_column + 2)),
            build_cell(block, (block_row + 2), (block_column + 3)),
            build_cell(block, (block_row + 3), (block_column + 1)),
            build_cell(block, (block_row + 3), (block_column + 2)),
            build_cell(block, (block_row + 3), (block_column + 3)),
        ]
    }
}

const initial_state = {
    sudoku_board: {
        game: {
            boards: [
                build_board(1,0,0),
                build_board(2,0,3),
                build_board(3,0,6),
                build_board(4,3,0),
                build_board(5,3,3),
                build_board(6,3,6),
                build_board(7,6,0),
                build_board(8,6,3),
                build_board(9,6,6),
            ]
        }
    }
};



export default createStore(selectValueReducer, initial_state);