import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Game from './Game';
import store from '../store';
import Board from './Board';

describe ('Basic Functionality', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Game/></Provider>);
    });

    it('renders a board', () => {
        expect(wrapper.find(Board)).toHaveLength(9);
    })

});
