import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import PencilBoard from './PencilBoard';
import PencilCell from './PencilCell';
import { initial_state } from '../store';
import configureMockStore from 'redux-mock-store';

describe ('Basic Functionality', () => {
    let wrapper, fakeStore;

    beforeEach(() => {
        fakeStore = configureMockStore()(initial_state);
        wrapper = mount(<Provider store={fakeStore}>
            <PencilBoard cell={1} sudoku_block={1} sudoku_row={1} sudoku_column={1}/>
        </Provider>);
    });

    it('renders a set of pencil cells', () => {
        expect(wrapper.find(PencilCell)).toHaveLength(9);
    });

    it('handles a select_value click event properly', () => {
        const clickHandler = wrapper.find(PencilCell).first().prop('handleClick');
        clickHandler();
        const expectedAction = {
            type: 'SELECT_VALUE',
            cell_selected: {
                sudoku_block: 1,
                sudoku_row: 1,
                sudoku_column: 1,
                cell: 1,
                cell_value: 1,
            },
        };
        expect(fakeStore.getActions()).toContainEqual(expectedAction)

    });


});