import React from 'react';

class PencilCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        }
    }

    render() {
        return (
            <div className="pencilCell" onClick={this.props.handleClick}>
                {this.state.value}
            </div>
        );
    }
}

export default PencilCell;