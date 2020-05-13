import React from 'react';
import { connect } from 'react-redux';
import goBack from '../goBackAction';
import goForward from '../goForwardAction';
import Board from "./Board";

class Game extends React.Component {
    handleClick(direction) {
        switch(direction) {
            case 'back':
                this.props.goBack();
                break;
            case 'forward':
                this.props.goForward();
                break;
        }
    }

    render() {
        var row_1 = [];
        var row_2 = [];
        var row_3 = [];

        for(let [index, val] of this.props.sudoku_board.game.boards.slice(0,3).entries()) {
            row_1.push(
                <Board key={val.sudoku_block} class={'Board ' + (index % 2 ? 'even' : 'odd')} sudoku_block={val.sudoku_block} sudoku_block_row={val.sudoku_block_row} sudoku_block_column={val.sudoku_block_column}></Board>
            );
        }

        for(let [index, val] of this.props.sudoku_board.game.boards.slice(3,6).entries()) {
            row_2.push(
                <Board key={val.sudoku_block} class={'Board ' + (index % 2 ? 'odd' : 'even')} sudoku_block={val.sudoku_block} sudoku_block_row={val.sudoku_block_row} sudoku_block_column={val.sudoku_block_column}></Board>
            );
        }

        for(let [index, val] of this.props.sudoku_board.game.boards.slice(6,9).entries()) {
            row_3.push(
                <Board key={val.sudoku_block} class={'Board ' + (index % 2 ? 'even' : 'odd')} sudoku_block={val.sudoku_block} sudoku_block_row={val.sudoku_block_row} sudoku_block_column={val.sudoku_block_column}></Board>
            );
        }

        return (
            <div className="game">
                <div className="previous" onClick={() => this.handleClick('back')}>
                    PREV
                </div>
                <div className="previous" onClick={() => this.handleClick('forward')}>
                    FORWARD
                </div>
                <div className="game-board row">
                    {row_1}
                </div>
                <div className="game-board row">
                    {row_2}
                </div>
                <div className="game-board row">
                    {row_3}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const board_state = state;
    const current = state.current;

    return board_state.history[current];
}

export default connect(mapStateToProps, {goBack, goForward})(Game);