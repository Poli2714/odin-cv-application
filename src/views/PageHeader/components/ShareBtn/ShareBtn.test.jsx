import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ShareBtn from './ShareBtn';

test('Share button renders on screen', () => {
  render(<ShareBtn />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Share button displays correct icon', () => {
  render(<ShareBtn />);

  const image = screen.getByRole('img');
  expect(image.src).toMatch(/\/share.svg$/i);
  expect(image.alt).toEqual('Share icon');
});
