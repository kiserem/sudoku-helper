import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game.js'
import Board from './Board.js';

describe ('Basic Functionality', () => {
    it('renders without crashing', () => {
        shallow(<Game />);
    });

    it('renders a board', () => {
        const game = shallow(<Game />);
        expect(game.find(Board)).toHaveLength(1);
    })

});
