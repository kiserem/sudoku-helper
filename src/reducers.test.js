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
    });
});