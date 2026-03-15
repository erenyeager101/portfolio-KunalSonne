import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero headline', () => {
  render(<App />);
  const heroHeading = screen.getAllByText(/Kunal Sonne/i);
  expect(heroHeading.length).toBeGreaterThan(0);
});
