import React from 'react';
import { shallow } from 'enzyme';
import PencilBoard from './PencilBoard';
import PencilCell from './PencilCell';

describe ('Basic Functionality', () => {
    it('renders without crashing', () => {
        shallow(<PencilBoard/>);
    });

    it('binds a state changing function to the PencilCell', () => {
        const pencilBoard = shallow(<PencilBoard/>);
        expect(pencilBoard.state().value).toBe(null);
        expect(pencilBoard.find('.pencilCell')).toHaveLength(0);

        const clickHandler = pencilBoard.find(PencilCell).first().prop('handleClick');
        clickHandler();
        expect(pencilBoard.state().value).toBe(1);
        expect(pencilBoard.find('.pencilCell')).toHaveLength(1);
    })
});