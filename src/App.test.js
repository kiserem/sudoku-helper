import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Game from "./components/Game";

describe ('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    })

    it('contains a game board', () => {
        const app = shallow(<App />);
        expect(app.find(Game)).toHaveLength(1);
    })
});
