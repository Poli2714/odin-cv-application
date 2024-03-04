import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { DateInputsWrapper } from '..';

test('renders DateInputsWrapper', () => {
  render(<DateInputsWrapper />);

  expect(screen.getByTestId('date-inputs-wrapper')).toBeInTheDocument();
});

test('renders DateInputsWrapper with children if specified', () => {
  render(
    <DateInputsWrapper>
      <input name="test" id="test" type="text" />
      <button>Hello guys!</button>
    </DateInputsWrapper>,
  );

  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
