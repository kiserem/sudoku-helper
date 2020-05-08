import React from 'react';
import { shallow } from 'enzyme';
import PencilCell from './PencilCell';

describe ('Basic functionality', () => {
    it('renders without crashing', () => {
        shallow(<PencilCell/>);
    });
})