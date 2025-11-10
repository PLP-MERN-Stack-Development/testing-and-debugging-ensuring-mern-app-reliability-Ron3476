import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('increments counter', () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
