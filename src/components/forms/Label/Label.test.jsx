import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Label from './Label';

test('renders Label', () => {
  render(<Label labelFor="test" labelName="test" />);

  expect(screen.getByTestId('label')).toBeInTheDocument();
});
