import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import FullName from './FullName';
import { PersonalInfoContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="test">Test label</label>),
  TextInput: vi.fn(({ value, onChange }) => (
    <input id="test" onChange={onChange} type="text" value={value} />
  )),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '' });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <FullName />
    </PersonalInfoContext.Provider>
  );
}

test('renders FullName component', () => {
  render(<FullName />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();
});

test('updates fullName value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent />);
  const input = screen.getByLabelText('Test label');
  expect(input).toHaveValue('');
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();

  await user.type(input, 'E');
  expect(input).toHaveValue('E');
  expect(screen.queryByTestId('warning')).toBeInTheDocument();

  await user.clear(input);
  await user.type(input, 'Elgun');
  expect(input).toHaveValue('Elgun');
  expect(screen.queryByTestId('warning')).not.toBeInTheDocument();
});
