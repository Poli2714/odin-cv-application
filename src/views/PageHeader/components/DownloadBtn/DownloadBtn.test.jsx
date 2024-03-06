import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import DownloadBtn from './DownloadBtn';

test('Download button is rendered on screen', () => {
  render(<DownloadBtn />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Share button displays correct icon', () => {
  render(<DownloadBtn />);

  const image = screen.getByRole('img');
  expect(image.src).toMatch(/\/download.svg$/i);
  expect(image.alt).toEqual('Download icon');
});
