import { SELECT_VALUE} from "./actions";

function selectValueReducer(state={}, action){
    switch(action.type) {
        case SELECT_VALUE:
            let newState = Object.assign({}, state);
            let cell_value = action.cell_selected.cell_value;
            let selected_cell = action.cell_selected.cell - 1;
            let selected_block = action.cell_selected.sudoku_block - 1;
            let selected_row = action.cell_selected.sudoku_row;
            let selected_column = action.cell_selected.sudoku_column;

            newState.sudoku_board.game.boards[action.cell_selected.sudoku_block - 1].cells[selected_cell].pencil_board.cell_value = cell_value;

            switch(cell_value) {
                case 1:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_1 = null;
                            }
                        }
                    }
                    break;
                case 2:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_2 = null;
                            }
                        }
                    }
                    break;
                case 3:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_3 = null;
                            }
                        }
                    }
                    break;
                case 4:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_4 = null;
                            }
                        }
                    }
                    break;
                case 5:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_5 = null;
                            }
                        }
                    }
                    break;
                case 6:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_6 = null;
                            }
                        }
                    }
                    break;
                case 7:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_7 = null;
                            }
                        }
                    }
                    break;
                case 8:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_8 = null;
                            }
                        }
                    }
                    break;
                case 9:
                    for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                        for(let [index, cell] of block.cells.entries()) {
                            if (
                                cell.sudoku_block - 1 === selected_block ||
                                cell.sudoku_row === selected_row ||
                                cell.sudoku_column === selected_column
                            ) {
                                cell.pencil_board.pencil_9 = null;
                            }
                        }
                    }
                    break;
            }
            return newState;
        default:
            return state;
    }
}

export default selectValueReducer;
