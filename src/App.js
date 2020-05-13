import React from 'react';
import './App.css';
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
        <div class="websudoku-wrapper">
            <div className="websudoku">
                <h1>Easy Sudoku</h1>
                <iframe src="//widget.websudoku.com/?level=1" width="200" height="260" scrolling="no"
                        frameBorder="0"></iframe>
            </div>
            <div className="websudoku">
                <h1>Medium Sudoku</h1>
                <iframe src="//widget.websudoku.com/?level=2" width="200" height="260" scrolling="no"
                        frameBorder="0"></iframe>
            </div>
            <div className="websudoku">
                <h1>Hard Sudoku</h1>
                <iframe src="//widget.websudoku.com/?level=3" width="200" height="260" scrolling="no"
                        frameBorder="0"></iframe>
            </div>
        </div>
        <header className="App-header">
            <Game/>
        </header>
    </div>
  );
}

export default App;
