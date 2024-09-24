import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../../App';

const header = process.env.FAIL_TEST ? 'FAIL_TEST_HEADER' : 'Movie List';

test('Movie List', () => {
  render(<App />);
  const headerElement = screen.getByText(header);
  expect(headerElement).toBeInTheDocument();
});