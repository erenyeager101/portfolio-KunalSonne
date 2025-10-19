import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero headline', () => {
  render(<App />);
  const heroHeading = screen.getByText(/Kunal Sonne/i);
  expect(heroHeading).toBeInTheDocument();
});
