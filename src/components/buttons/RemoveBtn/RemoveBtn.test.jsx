import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RemoveBtn } from '..';

test('renders RemoveBtn', () => {
  render(<RemoveBtn disabled={false} onClick={() => {}} />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders svg inside RemoveBtn', () => {
  render(<RemoveBtn disabled={false} onClick={() => {}} />);

  expect(screen.getByRole('img')).toBeInTheDocument();
});

test('makes RemoveBtn disabled', () => {
  render(<RemoveBtn disabled={true} onClick={() => {}} />);

  expect(screen.getByRole('button')).toBeDisabled();
});

test('makes RemoveBtn enabled', () => {
  render(<RemoveBtn disabled={false} onClick={() => {}} />);

  expect(screen.getByRole('button')).toBeEnabled();
});

test('calls event handler once on RemoveBtn click if enabled', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<RemoveBtn disabled={false} onClick={onClick} />);

  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
});

test("doesn't call event handler if RemoveBtn is disabled", async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<RemoveBtn disabled={true} onClick={onClick} />);

  await user.click(screen.getByRole('button'));
  expect(onClick).not.toHaveBeenCalled();
});
