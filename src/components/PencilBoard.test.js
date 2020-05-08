import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PencilBoard from './PencilBoard';
import PencilCell from './PencilCell';

describe ('Basic Functionality', () => {
    it('renders without crashing', () => {
        shallow(<PencilBoard/>);
    });

    it('simulates click events', () => {
        const onClick = sinon.spy();
        const pencilBoard = shallow(<PencilBoard/>);
        pencilBoard.find('.pencilCell').first().simulate('click');
        expect(pencilBoard.state().value).toBe(1);
        expect(pencilBoard.find('.pencilCell')).toHaveLength(1);
    })

    it('binds a state changing function the PencilCell', () => {
        const pencilBoard = shallow(<PencilBoard/>);
        const clickHandler = pencilBoard.find(PencilCell).first().prop('handleClick');
        clickHandler();
        expect(pencilBoard.state().value).toBe(1);
        expect(pencilBoard.find('.pencilCell')).toHaveLength(1);
    })
});