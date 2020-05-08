import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PencilBoard from './PencilBoard';

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
});