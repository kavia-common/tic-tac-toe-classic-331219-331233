import React, { useState } from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

// PUBLIC_INTERFACE
/**
 * Main App component for Tic Tac Toe game
 * Renders the game interface with responsive layout
 */
function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

export default App;
