import React from 'react';
import { connect } from 'react-redux';
import selectValue from '../selectValueAction';
import PencilCell from './PencilCell';
import './PencilBoard.css';

class PencilBoard extends React.Component {
    handleClick(i) {
        this.props.selectValue({
            sudoku_block: this.props.sudoku_block,
            sudoku_row: this.props.sudoku_row,
            sudoku_column: this.props.sudoku_column,
            cell: this.props.cell,
            cell_value: i
        });
    }

    renderSolved() {
        return (
            <div className="PencilBoard solved">
                <div className="pencilCell">
                    {this.props.cell_value}
                </div>
            </div>
        );
    }

    renderUnsolved() {
        return (
            <div className="PencilBoard unsolved">
                <div className="pencilRow">
                    <PencilCell value={this.props.pencil_1} handleClick={() => this.handleClick(this.props.pencil_1)}/>
                    <PencilCell value={this.props.pencil_2} handleClick={() => this.handleClick(this.props.pencil_2)}/>
                    <PencilCell value={this.props.pencil_3} handleClick={() => this.handleClick(this.props.pencil_3)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell value={this.props.pencil_4} handleClick={() => this.handleClick(this.props.pencil_4)}/>
                    <PencilCell value={this.props.pencil_5} handleClick={() => this.handleClick(this.props.pencil_5)}/>
                    <PencilCell value={this.props.pencil_6} handleClick={() => this.handleClick(this.props.pencil_6)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell value={this.props.pencil_7} handleClick={() => this.handleClick(this.props.pencil_7)}/>
                    <PencilCell value={this.props.pencil_8} handleClick={() => this.handleClick(this.props.pencil_8)}/>
                    <PencilCell value={this.props.pencil_9} handleClick={() => this.handleClick(this.props.pencil_9)}/>
                </div>
            </div>
        );
    }
    render() {
        if (this.props.cell_value === null) {
            return this.renderUnsolved();
        } else {
            return this.renderSolved();
        }
    }
}

const mapStateToProps = (state, passed_props) => {
    var current_state = state.current;
    var current = state.history[current_state];

    return {
        cell_value: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.cell_value,
        pencil_1: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_1,
        pencil_2: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_2,
        pencil_3: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_3,
        pencil_4: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_4,
        pencil_5: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_5,
        pencil_6: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_6,
        pencil_7: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_7,
        pencil_8: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_8,
        pencil_9: current.sudoku_board.game.boards[passed_props.sudoku_block - 1].cells[passed_props.cell - 1].pencil_board.pencil_9,
        sudoku_block: passed_props.sudoku_block,
        sudoku_row: passed_props.sudoku_row,
        sudoku_column: passed_props.sudoku_column,
        cell: passed_props.cell,
    };
};



export default connect(mapStateToProps, {selectValue})(PencilBoard);
