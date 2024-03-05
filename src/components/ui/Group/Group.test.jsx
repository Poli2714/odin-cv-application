import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Group from './Group';

test('renders Group', () => {
  render(<Group isActive={false} label="Test label" onClick={() => {}} />);

  expect(screen.getByTestId('group')).toMatchSnapshot();
});

test('renders img with correct attributes when Group is active', () => {
  render(<Group isActive={true} label="Test label" onClick={() => {}} />);

  const image = screen.getByRole('img');
  expect(image.alt).toMatch(/^arrow up icon$/i);
  expect(image).toHaveClass(/^_expanded_[a-z0-9]+$/);
});

test('renders img with correct attributes when Group is inactive', () => {
  render(<Group isActive={false} label="Test label" onClick={() => {}} />);

  const image = screen.getByRole('img');
  expect(image.alt).toMatch(/^arrow down icon$/i);
  expect(image).toHaveClass(/^_collapsed_[a-z0-9]+$/);
});

test('calls event handler once when clicked on Group', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<Group isActive={true} label="Test label" onClick={onClick} />);

  await user.click(screen.getByTestId('group'));
  expect(onClick).toHaveBeenCalledOnce();
});

test("doesn't call event handler when Group is not clicked", () => {
  const onClick = vi.fn();

  render(<Group isActive={false} label="Test label" onClick={onClick} />);

  expect(onClick).not.toHaveBeenCalled();
});
