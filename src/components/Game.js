import React from 'react';
import Board from "./Board";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board row">
                    <Board class="Board odd" sudoku_block={1} sudoku_block_row={0} sudoku_block_column={0}></Board>
                    <Board class="Board even" sudoku_block={2} sudoku_block_row={0} sudoku_block_column={3}></Board>
                    <Board class="Board odd" sudoku_block={3} sudoku_block_row={0} sudoku_block_column={6}></Board>
                </div>
                <div className="game-board row">
                    <Board class="Board even" sudoku_block={4} sudoku_block_row={3} sudoku_block_column={0}></Board>
                    <Board class="Board odd" sudoku_block={5} sudoku_block_row={3} sudoku_block_column={3}></Board>
                    <Board class="Board even" sudoku_block={6} sudoku_block_row={3} sudoku_block_column={6}></Board>
                </div>
                <div className="game-board row">
                    <Board class="Board odd" sudoku_block={7} sudoku_block_row={6} sudoku_block_column={0}></Board>
                    <Board class="Board even" sudoku_block={8} sudoku_block_row={6} sudoku_block_column={3}></Board>
                    <Board class="Board odd" sudoku_block={9} sudoku_block_row={6} sudoku_block_column={6}></Board>
                </div>
            </div>
        );
    }
}

export default Game;