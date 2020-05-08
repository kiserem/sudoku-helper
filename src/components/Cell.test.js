import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell.js';

describe ('Basic Functionality', () => {
    it('renders without crashing', () => {
        shallow(<Cell />);
    })
});