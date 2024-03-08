import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Employer from './Employer';
import { ExperienceContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="employer">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input id="employer" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParenComponent({ id }) {
  const [experiences, setExperiences] = useState({
    testId: { employer: '' },
    testId2: { employer: 'hello' },
  });

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <Employer id={id} />
    </ExperienceContext.Provider>
  );
}

test('renders Employer', () => {
  render(<MockParenComponent id="testId" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
});

test('renders initial employer value correctly', () => {
  render(<MockParenComponent id="testId2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('hello');
});

test('updates employer value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParenComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, 'Google');
  expect(input).toHaveValue('Google');

  await user.clear(input);
  await user.type(input, 'Twitter');
  expect(input).toHaveValue('Twitter');
});
