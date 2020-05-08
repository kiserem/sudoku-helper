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
        console.log("HELLO");
        console.log(i);
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
                    <div className="pencilCell" onClick={() => this.handleClick(4)}>
                        4
                    </div>
                    <div className="pencilCell" onClick={() => this.handleClick(5)}>
                        5
                    </div>
                    <div className="pencilCell" onClick={() => this.handleClick(6)}>
                        6
                    </div>
                </div>
                <div className="pencilRow">
                    <div className="pencilCell" onClick={() => this.handleClick(7)}>
                        7
                    </div>
                    <div className="pencilCell" onClick={() => this.handleClick(8)}>
                        8
                    </div>
                    <div className="pencilCell" onClick={() => this.handleClick(9)}>
                        9
                    </div>
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
