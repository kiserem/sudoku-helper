import React from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends React.Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className="row">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
                <div className="row">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
                <div className="row">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
            </div>
        );
    }
}

export default Board;