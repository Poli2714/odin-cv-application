import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BtnWrapper } from '..';

test('renders BtnWrapper', () => {
  render(<BtnWrapper />);

  expect(screen.getByTestId('btn-wrapper')).toBeInTheDocument();
});

test('render BtnWrapper if children provided', () => {
  render(
    <BtnWrapper>
      <button>Click me</button>
      <h1>Hello World!</h1>
    </BtnWrapper>,
  );

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
