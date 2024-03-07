import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Email from './Email';
import { PersonalInfoContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="email">Test label</label>),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({ email: '' });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <Email />
    </PersonalInfoContext.Provider>
  );
}

test('renders Email', () => {
  render(<Email />);

  expect(screen.getByLabelText('Test label')).toMatchSnapshot();
});

test('updates email value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent />);
  const emailInput = screen.getByLabelText('Test label');
  expect(emailInput).toHaveValue('');

  await user.type(emailInput, 'elgun@test.com');
  expect(emailInput).toHaveValue('elgun@test.com');
  await user.clear(emailInput);
  expect(emailInput).toHaveValue('');
});
