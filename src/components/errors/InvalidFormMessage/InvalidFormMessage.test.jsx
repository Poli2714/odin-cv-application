import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import InvalidFormMessage from './InvalidFormMessage';

test('renders error message', () => {
  render(<InvalidFormMessage />);

  expect(screen.getByTestId('error-message')).toBeInTheDocument();
});
