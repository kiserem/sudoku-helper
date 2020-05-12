import { SELECT_VALUE} from "./actions";

function selectValueReducer(state={}, action){
    switch(action.type) {
        case SELECT_VALUE:
            let newState = Object.assign({}, state);
            let cell_value = action.cell_selected.cell_value;
            let selected_cell = action.cell_selected.cell - 1;
            let selected_block = action.cell_selected.sudoku_block - 1;

            newState.sudoku_board.game.boards[action.cell_selected.sudoku_block - 1].cells[selected_cell].pencil_board.cell_value = cell_value;

            switch(cell_value) {
                case 1:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_1 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_1 = null;
                    break;
                case 2:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_2 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_2 = null;
                    break;
                case 3:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_3 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_3 = null;
                    break;
                case 4:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_4 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_4 = null;
                    break;
                case 5:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_5 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_5 = null;
                    break;
                case 6:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_6 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_6 = null;
                    break;
                case 7:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_7 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_7 = null;
                    break;
                case 8:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_8 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_8 = null;
                    break;
                case 9:
                    newState.sudoku_board.game.boards[selected_block].cells[0].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[1].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[2].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[3].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[4].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[5].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[6].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[7].pencil_board.pencil_9 = null;
                    newState.sudoku_board.game.boards[selected_block].cells[8].pencil_board.pencil_9 = null;
                    break;
            }
            return newState;
        default:
            return state;
    }
}

export default selectValueReducer;
