import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PersonalInformation from './PersonalInformation';

vi.mock('src/components/forms', () => ({
  Form: vi.fn(() => <form data-testid="form" method="get" action=""></form>),
}));

test('renders PersonalInformation', () => {
  render(<PersonalInformation />);

  expect(screen.getByTestId('form')).toBeInTheDocument();
});
