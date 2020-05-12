import React from 'react';

class PencilCell extends React.Component {
    render() {
        return (
            <div className="pencilCell" onClick={this.props.handleClick}>
                {this.props.value}
            </div>
        );
    }
}

export default PencilCell;