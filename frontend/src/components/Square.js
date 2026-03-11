import React from 'react';
import './Square.css';

// PUBLIC_INTERFACE
/**
 * Square component representing a single cell in the Tic Tac Toe board
 * @param {string|null} value - The value to display ('X', 'O', or null)
 * @param {Function} onClick - Callback function when the square is clicked
 */
function Square({ value, onClick }) {
  return (
    <button 
      className={`square ${value ? 'filled' : ''} ${value === 'X' ? 'x-mark' : ''} ${value === 'O' ? 'o-mark' : ''}`}
      onClick={onClick}
      aria-label={value ? `Square filled with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
}

export default Square;
