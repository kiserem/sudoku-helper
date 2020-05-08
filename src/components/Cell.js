import React from 'react';
import './Cell.css';
import PencilBoard from "./PencilBoard";

class Cell extends React.Component {
    render() {
        return (
            <div className="Cell">
                <PencilBoard/>
            </div>
        );
    }
}

export default Cell;
