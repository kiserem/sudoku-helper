import React from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sudoku_block: this.props.sudoku_block,
            sudoku_block_row: this.props.sudoku_block_row,
            sudoku_block_column: this.props.sudoku_block_column,
        };
    }

    render() {
        return (
            <div className={this.props.class}>
                <div className="row">
                    {/*1,4,7*/}
                    <Cell cell={1} sudoku_block={this.state.sudoku_block} sudoku_row={1 + this.state.sudoku_block_row} sudoku_column={1 + this.state.sudoku_block_column}/>
                    <Cell cell={2} sudoku_block={this.state.sudoku_block} sudoku_row={1 + this.state.sudoku_block_row} sudoku_column={2 + this.state.sudoku_block_column}/>
                    <Cell cell={3} sudoku_block={this.state.sudoku_block} sudoku_row={1 + this.state.sudoku_block_row} sudoku_column={3 + this.state.sudoku_block_column}/>
                </div>
                <div className="row">
                    {/*2,5,8*/}
                    <Cell cell={4} sudoku_block={this.state.sudoku_block} sudoku_row={2 + this.state.sudoku_block_row} sudoku_column={1 + this.state.sudoku_block_column}/>
                    <Cell cell={5} sudoku_block={this.state.sudoku_block} sudoku_row={2 + this.state.sudoku_block_row} sudoku_column={2 + this.state.sudoku_block_column}/>
                    <Cell cell={6} sudoku_block={this.state.sudoku_block} sudoku_row={2 + this.state.sudoku_block_row} sudoku_column={3 + this.state.sudoku_block_column}/>
                </div>
                <div className="row">
                    {/*3,6,9*/}
                    <Cell cell={7} sudoku_block={this.state.sudoku_block} sudoku_row={3 + this.state.sudoku_block_row} sudoku_column={1 + this.state.sudoku_block_column}/>
                    <Cell cell={8} sudoku_block={this.state.sudoku_block} sudoku_row={3 + this.state.sudoku_block_row} sudoku_column={2 + this.state.sudoku_block_column}/>
                    <Cell cell={9} sudoku_block={this.state.sudoku_block} sudoku_row={3 + this.state.sudoku_block_row} sudoku_column={3 + this.state.sudoku_block_column}/>
                </div>
            </div>
        );
    }
}

export default Board;