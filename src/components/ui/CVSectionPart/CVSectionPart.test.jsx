import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CVSectionPart from './CVSectionPart';

test('renders CVSectionPart', () => {
  render(
    <CVSectionPart
      date="Test date"
      subtitle="Test subtitle"
      title="Test title"
    />,
  );

  expect(screen.getByTestId('cv-section-part')).toBeInTheDocument();
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByTestId('subtitle')).toBeInTheDocument();
  expect(screen.getByTestId('date')).toBeInTheDocument();
});

test('renders CVSectionPart together with children if specified', () => {
  render(
    <CVSectionPart date="test date" subtitle="test subtitle" title="test title">
      <button>Click me</button>
    </CVSectionPart>,
  );

  expect(screen.getByTestId('cv-section-part')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
