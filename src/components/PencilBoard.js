import React from 'react';
import PencilCell from './PencilCell';
import './PencilBoard.css';

class PencilBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
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
                    <PencilCell displayValue={1} handleClick={() => this.handleClick(1)}/>
                    <PencilCell displayValue={2} handleClick={() => this.handleClick(2)}/>
                    <PencilCell displayValue={3} handleClick={() => this.handleClick(3)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell displayValue={4} handleClick={() => this.handleClick(4)}/>
                    <PencilCell displayValue={5} handleClick={() => this.handleClick(5)}/>
                    <PencilCell displayValue={6} handleClick={() => this.handleClick(6)}/>
                </div>
                <div className="pencilRow">
                    <PencilCell displayValue={7} handleClick={() => this.handleClick(7)}/>
                    <PencilCell displayValue={8} handleClick={() => this.handleClick(8)}/>
                    <PencilCell displayValue={9} handleClick={() => this.handleClick(9)}/>
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
