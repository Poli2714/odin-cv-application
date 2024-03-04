import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputWrapper from './InputWrapper';

test('renders InputWrapper', () => {
  render(<InputWrapper />);

  expect(screen.getByTestId('input-wrapper')).toBeInTheDocument();
});

test('renders InputWrapper together with children if provided', () => {
  render(
    <InputWrapper>
      <div>Hello World!</div>
    </InputWrapper>,
  );

  expect(screen.getByTestId('input-wrapper')).toBeInTheDocument();
});
