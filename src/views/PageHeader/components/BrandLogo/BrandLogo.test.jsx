import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import BrandLogo from './BrandLogo';

test('renders BrandLogo', () => {
  render(<BrandLogo />);

  expect(screen.getByTestId('brand-logo')).toMatchSnapshot();
});

test('renders correct icon inside BrandLogo', () => {
  render(<BrandLogo />);

  expect(screen.getByRole('img').src).toMatch(/\/brand-logo.svg$/i);
});
