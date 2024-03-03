import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddMoreBtn from './AddMoreBtn';

test('renders AddMoreBtn', () => {
  render(<AddMoreBtn onClick={() => {}} />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders img inside AddMoreBtn properly', () => {
  render(<AddMoreBtn onClick={() => {}} />);

  const image = screen.getByRole('img');
  expect(image.src).toMatch(/add.svg$/i);
  expect(image.alt).toEqual('Add sign');
  expect(image.height).toEqual(16);
  expect(image.width).toEqual(16);
});

test('calls event handler once on AddMoreBtn click', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<AddMoreBtn onClick={onClick} />);

  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
});
