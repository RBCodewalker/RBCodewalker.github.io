import { render, screen } from '@testing-library/react';
import App from './App';

test('renders education checkpoint and heading', () => {
  render(<App />);
  expect(screen.getAllByText(/education/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/experience/i).length).toBeGreaterThan(0);
});
