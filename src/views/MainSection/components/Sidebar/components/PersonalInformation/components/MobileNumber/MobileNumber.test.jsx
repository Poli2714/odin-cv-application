import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import MobileNumber from './MobileNumber';
import { PersonalInfoContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="mobile">Test label</label>),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({ mobile: '' });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <MobileNumber />
    </PersonalInfoContext.Provider>
  );
}

test('renders MobileNumber', () => {
  render(<MobileNumber />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();
});

test('updates mobile value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent />);
  const mobileInput = screen.getByLabelText('Test label');

  expect(mobileInput).toHaveValue('');
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();

  await user.type(mobileInput, '123');
  expect(mobileInput).toHaveValue('123');
  expect(screen.queryByTestId('warning')).toBeInTheDocument();

  await user.clear(mobileInput);
  await user.type(mobileInput, '+12345678901');
  expect(mobileInput).toHaveValue('+12345678901');
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();
});
