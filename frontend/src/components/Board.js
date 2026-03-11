import React from 'react';
import Square from './Square';
import './Board.css';

// PUBLIC_INTERFACE
/**
 * Board component that renders a 3x3 grid of squares
 * @param {Array} squares - Array of 9 values representing the board state
 * @param {Function} onClick - Callback function when a square is clicked
 */
function Board({ squares, onClick }) {
  // PUBLIC_INTERFACE
  /**
   * Renders a single square
   * @param {number} index - Index of the square (0-8)
   */
  const renderSquare = (index) => {
    return (
      <Square 
        value={squares[index]} 
        onClick={() => onClick(index)}
        key={index}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
