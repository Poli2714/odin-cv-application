import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MainSection from './MainSection';

vi.mock('src/components/layout', () => ({
  CV: vi.fn(() => <div data-testid="cv">Mock CV</div>),
}));

test('renders MainSection', () => {
  render(<MainSection />);

  expect(screen.getByRole('main')).toBeInTheDocument();
});
