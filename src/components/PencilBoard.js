import React from 'react';
import PencilCell from './PencilCell';
import './PencilBoard.css';

class PencilBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            pencil_1: 1,
            pencil_2: 2,
            pencil_3: 3,
            pencil_4: 4,
            pencil_5: 5,
            pencil_6: 6,
            pencil_7: 7,
            pencil_8: 8,
            pencil_9: 9,
            sudoku_block: this.props.sudoku_block,
            sudoku_row: this.props.sudoku_row,
            sudoku_column: this.props.sudoku_column,
        };
    }

    handleClick(i) {
        this.setState({
            value: i
        });
    }

    renderSolved() {
        return (
            <div className="PencilBoard solved">
                <div className="pencilCell">
                    {this.state.value}
                </div>
            </div>
        );
    }

    renderUnsolved() {
        return (
            <div className="PencilBoard unsolved">
                <div className="pencilRow">
                    <PencilCell value={this.state.pencil_1} handleClick={() => this.handleClick(this.state.pencil_1)}/>
                    <PencilCell value={this.state.pencil_2} handleClick={() => this.handleClick(this.state.pencil_2)}/>
                    <PencilCell value={this.state.pencil_3} handleClick={() => this.handleClick(this.state.pencil_3)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell value={this.state.pencil_4} handleClick={() => this.handleClick(this.state.pencil_4)}/>
                    <PencilCell value={this.state.pencil_5} handleClick={() => this.handleClick(this.state.pencil_5)}/>
                    <PencilCell value={this.state.pencil_6} handleClick={() => this.handleClick(this.state.pencil_6)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell value={this.state.pencil_7} handleClick={() => this.handleClick(this.state.pencil_7)}/>
                    <PencilCell value={this.state.pencil_8} handleClick={() => this.handleClick(this.state.pencil_8)}/>
                    <PencilCell value={this.state.pencil_9} handleClick={() => this.handleClick(this.state.pencil_9)}/>
                </div>
            </div>
        );
    }
    render() {
        if (this.state.value === null) {
            return this.renderUnsolved();
        } else {
            return this.renderSolved();
        }
    }
}

export default PencilBoard;
