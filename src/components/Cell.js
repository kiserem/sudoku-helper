import React from 'react';
import './Cell.css';
import PencilBoard from "./PencilBoard";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sudoku_block: this.props.sudoku_block,
            sudoku_row: this.props.sudoku_row,
            sudoku_column: this.props.sudoku_column,
            cell: this.props.cell,
        };
    }

    render() {
        return (
            <div className="Cell">
                <PencilBoard cell={this.state.cell} sudoku_block={this.state.sudoku_block} sudoku_row={this.state.sudoku_row} sudoku_column={this.state.sudoku_column}/>
            </div>
        );
    }
}

export default Cell;
