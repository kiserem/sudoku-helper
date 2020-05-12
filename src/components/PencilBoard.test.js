import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import PencilBoard from './PencilBoard';
import PencilCell from './PencilCell';
import store from '../store';

describe ('Basic Functionality', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Provider store={store}>
            <PencilBoard cell={1} sudoku_block={1} sudoku_row={1} sudoku_column={1}/>
        </Provider>);
    })

    it('renders a set of pencil cells', () => {
        expect(wrapper.find(PencilCell)).toHaveLength(9);
    })
});