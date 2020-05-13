import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Game from './Game';
import { initial_state } from '../store';
import Board from './Board';
import PencilCell from "./PencilCell";
import configureMockStore from 'redux-mock-store';

describe ('Basic Functionality', () => {
    let wrapper, fakeStore;

    beforeEach(() => {
        fakeStore = configureMockStore()(initial_state);
        wrapper = mount(<Provider store={fakeStore}><Game/></Provider>);
    });

    it('renders a board', () => {
        expect(wrapper.find(Board)).toHaveLength(9);
    })

    it('handles a previous click event properly', () => {
        const clickHandler = wrapper.find('.previous').first().prop('onClick');
        clickHandler();
        const expectedAction = {
            type: 'GO_BACK',
        };
        expect(fakeStore.getActions()).toContainEqual(expectedAction)
    })

});
