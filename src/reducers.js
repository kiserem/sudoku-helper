import { SELECT_VALUE } from "./selectValueAction";
import { GO_BACK } from "./goBackAction";

function selectValueReducer(state={}, action){
    switch(action.type) {
        case SELECT_VALUE:
            // let blah = JSON.parse(JSON.stringify(state));
            let current = state.current;
            let oldState = JSON.parse(JSON.stringify(state));
            let newState = JSON.parse(JSON.stringify(state.history[current]));
            let cell_value = action.cell_selected.cell_value;
            let selected_cell = action.cell_selected.cell - 1;
            let selected_block = action.cell_selected.sudoku_block - 1;
            let selected_row = action.cell_selected.sudoku_row;
            let selected_column = action.cell_selected.sudoku_column;

            newState.sudoku_board.game.boards[action.cell_selected.sudoku_block - 1].cells[selected_cell].pencil_board.cell_value = cell_value;

            for(let [index, block] of newState.sudoku_board.game.boards.entries()) {
                for(let [index, cell] of block.cells.entries()) {
                    if (
                        cell.sudoku_block - 1 === selected_block ||
                        cell.sudoku_row === selected_row ||
                        cell.sudoku_column === selected_column
                    ) {
                        switch(cell_value) {
                            case 1:
                                cell.pencil_board.pencil_1 = null;
                                break;
                            case 2:
                                cell.pencil_board.pencil_2 = null;
                                break;
                            case 3:
                                cell.pencil_board.pencil_3 = null;
                                break;
                            case 4:
                                cell.pencil_board.pencil_4 = null;
                                break;
                            case 5:
                                cell.pencil_board.pencil_5 = null;
                                break;
                            case 6:
                                cell.pencil_board.pencil_6 = null;
                                break;
                            case 7:
                                cell.pencil_board.pencil_7 = null;
                                break;
                            case 8:
                                cell.pencil_board.pencil_8 = null;
                                break;
                            case 9:
                                cell.pencil_board.pencil_9 = null;
                                break;
                        }
                    }
                }
            }

            oldState.current = current + 1;
            oldState.history.push(newState);

            return oldState;
        case GO_BACK:
            let priorState = Object.assign({}, state);
            if (state.current > 0) {
                priorState.current = state.current - 1;
                priorState.history = priorState.history.slice(0,state.current);
            }
            return priorState;
        default:
            return state;
    }
}

export default selectValueReducer;
