import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

test('renders CharacterLimit', () => {
  render(<CharacterLimit limit={10} value="" />);

  expect(screen.getByTestId('limit-container')).toBeInTheDocument();
});

test('renders CharacterLimit together with children if provided', () => {
  render(
    <CharacterLimit limit={200} value="">
      <h1>Test</h1>
    </CharacterLimit>,
  );

  expect(screen.getByRole('heading')).toBeInTheDocument();
});

test('displays correct value length', () => {
  render(<CharacterLimit value="hello baby" limit={100} />);

  expect(screen.getByTestId('limit').textContent).toEqual('10 / 100');
});
