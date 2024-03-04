import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormWrapper from './FormWrapper';

test('renders FormWrapper', () => {
  render(<FormWrapper />);

  expect(screen.getByTestId('form-wrapper')).toBeInTheDocument();
});

test('renders FormWrapper together with children if prevoided', () => {
  render(
    <FormWrapper>
      <h1>Test heading</h1>
    </FormWrapper>,
  );

  expect(screen.getByRole('heading')).toBeInTheDocument();
});
