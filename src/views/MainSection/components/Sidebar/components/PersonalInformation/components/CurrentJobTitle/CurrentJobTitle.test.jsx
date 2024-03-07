import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import CurrentJobTitle from './CurrentJobTitle';
import { PersonalInfoContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="jobTitle">Test label</label>),
  TextInput: vi.fn(({ value, onChange }) => (
    <input id="jobTitle" name="jobTitle" value={value} onChange={onChange} />
  )),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({ currentJobTitle: '' });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <CurrentJobTitle />
    </PersonalInfoContext.Provider>
  );
}

test('renders CurrentJobTitle', () => {
  render(<CurrentJobTitle />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
});

test('updates currentJobTitle value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent />);
  const input = screen.getByLabelText('Test label');

  expect(input).toHaveValue('');
  await user.type(input, 'Web developer');
  expect(input).toHaveValue('Web developer');
  await user.clear(input);
  await user.type(input, 'hello');
  expect(input).toHaveValue('hello');
});
