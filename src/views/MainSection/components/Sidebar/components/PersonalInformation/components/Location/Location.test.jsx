import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Location from './Location';
import { PersonalInfoContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="location">Test label</label>),
  TextInput: vi.fn(({ value, onChange }) => (
    <input id="location" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({ city: '' });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <Location />
    </PersonalInfoContext.Provider>
  );
}

test('renders Location', () => {
  render(<Location />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
});

test('updates city value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent />);
  const cityInput = screen.getByLabelText('Test label');

  expect(cityInput).toHaveValue('');
  await user.type(cityInput, 'Baku');
  expect(cityInput).toHaveValue('Baku');
  await user.clear(cityInput);
  await user.type(cityInput, 'Los Angeles');
  expect(cityInput).toHaveValue('Los Angeles');
});
