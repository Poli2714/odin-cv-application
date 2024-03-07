import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Photo from './Photo';

test('renders Photo', () => {
  const imgFile = new File(['test'], 'test.jpg', { type: 'image/jpg' });

  render(<Photo size={100} src={imgFile.name} />);
  const image = screen.getByRole('img');

  expect(image).toBeInTheDocument();
  expect(image.height).toEqual(100);
  expect(image.width).toEqual(100);
  expect(image.src).toMatch(/test.jpg$/);
});
