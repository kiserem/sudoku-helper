import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import Cell from './Cell';

describe ('Basic Functionality', () => {
    it('renders without crashing', () => {
        shallow(<Board />);
    });

    it('has 9 cells', () => {
        const board = shallow(<Board />);
        expect(board.find(Cell)).toHaveLength(9);
    })
});