import React from 'react';
import './App.css';
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
        <div className="websudoku-wrapper">
            <div className="websudoku">
                <iframe title="easy" src="//widget.websudoku.com/?level=1" width="200" height="260" scrolling="no"
                        frameBorder="0"></iframe>
            </div>
            <div className="websudoku">
                <iframe title="med" src="//widget.websudoku.com/?level=2" width="200" height="260" scrolling="no"
                        frameBorder="0"></iframe>
            </div>
            <div className="websudoku">
                <iframe title="hard" src="//widget.websudoku.com/?level=3" width="200" height="260" scrolling="no"
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
