import React from 'react';

class PencilCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: props.displayValue,
            value: null,
        }
    }

    render() {
        return (
            <div className="pencilCell" onClick={this.props.handleClick}>
                {this.state.displayValue}
            </div>
        );
    }
}

export default PencilCell;