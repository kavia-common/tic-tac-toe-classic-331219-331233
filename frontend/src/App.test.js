import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tic tac toe game', () => {
  render(<App />);
  const titleElement = screen.getByText(/Tic Tac Toe/i);
  expect(titleElement).toBeInTheDocument();
});
