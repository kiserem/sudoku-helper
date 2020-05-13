import reducer from "./reducers";
import { initial_state } from './store';
import { SELECT_VALUE } from './selectValueAction';

describe('Reducers', () => {
    describe('SELECT_VALUE case', () => {

        it('resulting state is not the starting state', () => {
            expect(
                reducer(initial_state, {
                    type: SELECT_VALUE,
                    cell_selected: {
                        sudoku_block: 1,
                        sudoku_row: 1,
                        sudoku_column: 1,
                        cell: 1,
                        cell_value: 1,
                    }
                }).current
            ).not.toEqual(initial_state);
        });

        it('increments current', () => {
            expect(
                reducer(initial_state, {
                    type: SELECT_VALUE,
                    cell_selected: {
                        sudoku_block: 1,
                        sudoku_row: 1,
                        sudoku_column: 1,
                        cell: 1,
                        cell_value: 1,
                    }
                }).current
            ).toEqual(1);
        });

        it('sets the cell value of the clicked pencil cell to 1', () => {
            expect(
                reducer(initial_state, {
                    type: SELECT_VALUE,
                    cell_selected: {
                        sudoku_block: 1,
                        sudoku_row: 1,
                        sudoku_column: 1,
                        cell: 1,
                        cell_value: 1,
                    }
                }).history[1].sudoku_board.game.boards[0].cells[0].pencil_board.cell_value
            ).toEqual(1);
        });

        it('does not modify the prior history state pencil cell', () => {
            expect(
                reducer(initial_state, {
                    type: SELECT_VALUE,
                    cell_selected: {
                        sudoku_block: 1,
                        sudoku_row: 1,
                        sudoku_column: 1,
                        cell: 1,
                        cell_value: 1,
                    }
                }).history[0].sudoku_board.game.boards[0].cells[0].pencil_board.cell_value
            ).toEqual(null);
        });
    });
});