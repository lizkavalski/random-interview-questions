import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Interview Prep', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Interview Prep/i);
  expect(linkElement).toBeInTheDocument();
});

// test()
