import React, { useState } from 'react';
import Board from './Board';
import './TicTacToe.css';

// PUBLIC_INTERFACE
/**
 * Main Tic Tac Toe game component
 * Manages game state, turn tracking, win/draw detection, and game controls
 */
function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  // PUBLIC_INTERFACE
  /**
   * Calculates the winner of the game
   * @param {Array} squares - Array of 9 squares representing the board
   * @returns {string|null} - 'X', 'O', or null if no winner
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal top-left to bottom-right
      [2, 4, 6], // Diagonal top-right to bottom-left
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // PUBLIC_INTERFACE
  /**
   * Checks if the game is a draw
   * @param {Array} squares - Array of 9 squares representing the board
   * @returns {boolean} - true if all squares are filled and no winner
   */
  const isDraw = (squares) => {
    return squares.every(square => square !== null) && !calculateWinner(squares);
  };

  // PUBLIC_INTERFACE
  /**
   * Handles a player's move
   * @param {number} index - Index of the clicked square (0-8)
   */
  const handleClick = (index) => {
    // Don't allow moves if game is over or square is already filled
    if (gameOver || squares[index]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);

    // Check for winner or draw
    const winner = calculateWinner(newSquares);
    if (winner || isDraw(newSquares)) {
      setGameOver(true);
    }

    setIsXNext(!isXNext);
  };

  // PUBLIC_INTERFACE
  /**
   * Restarts the game with the same starting player
   */
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setGameOver(false);
  };

  // PUBLIC_INTERFACE
  /**
   * Resets the game completely, including starting player
   */
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const winner = calculateWinner(squares);
  const draw = isDraw(squares);

  // Determine status message
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a Draw!";
  } else {
    status = `Current Turn: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="tic-tac-toe">
      <div className="game-container">
        <h1 className="game-title">Tic Tac Toe</h1>
        
        <div className={`status ${winner ? 'winner' : draw ? 'draw' : ''}`}>
          {status}
        </div>

        <Board squares={squares} onClick={handleClick} />

        <div className="controls">
          <button 
            className="btn btn-restart" 
            onClick={handleRestart}
            aria-label="Restart game with same starting player"
          >
            Restart
          </button>
          <button 
            className="btn btn-reset" 
            onClick={handleReset}
            aria-label="Reset game completely"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
