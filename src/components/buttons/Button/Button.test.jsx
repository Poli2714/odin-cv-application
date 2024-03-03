import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

test('renders Button', () => {
  render(<Button clName="test" onClick={() => {}} />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('includes multiple classes when specified', () => {
  render(<Button clName="test hi" onClick={() => {}} />);
  expect(screen.getByRole('button')).toHaveClass(/^_btn_*/i, 'test', 'hi');
});

test('calls event handler once on Button click', async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<Button clName="test" onClick={onClick} />);

  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
});
