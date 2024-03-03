import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CloseBtn } from '..';

test('renders CloseBtn', () => {
  render(<CloseBtn onClick={() => {}} />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders img inside CloseBtn properly', () => {
  render(<CloseBtn onClick={() => {}} />);

  const image = screen.getByRole('img');
  expect(image.src).toMatch(/\/close.svg$/i);
  expect(image.alt).toEqual('Close icon');
  expect(image.height).toEqual(24);
  expect(image.width).toEqual(24);
});

test('calls event handler once on CloseBtn click', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<CloseBtn onClick={onClick} />);

  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
});
