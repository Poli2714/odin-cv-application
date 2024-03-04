import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CV } from '..';

test('renders CV', () => {
  render(<CV />);

  expect(screen.getByTestId('cv')).toBeInTheDocument();
});
