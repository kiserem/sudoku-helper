import React from 'react';
import Board from "./Board";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board row">
                    <Board class="Board odd"></Board>
                    <Board class="Board even"></Board>
                    <Board class="Board odd"></Board>
                </div>
                <div className="game-board row">
                    <Board class="Board even"></Board>
                    <Board class="Board odd"></Board>
                    <Board class="Board even"></Board>
                </div>
                <div className="game-board row">
                    <Board class="Board odd"></Board>
                    <Board class="Board even"></Board>
                    <Board class="Board odd"></Board>
                </div>
            </div>
        );
    }
}

export default Game;