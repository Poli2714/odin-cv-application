import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CVSection from './CVSection';

test('renders CVSection', () => {
  render(<CVSection sectionTitle="Test title" />);

  expect(screen.getByTestId('cv-section')).toBeInTheDocument();
  expect(screen.getByRole('heading')).toBeInTheDocument();
});

test('renders CVSection together with children if provided', () => {
  render(
    <CVSection sectionTitle="Test title">
      <button>Test click</button>
    </CVSection>,
  );

  expect(screen.getByTestId('cv-section')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
