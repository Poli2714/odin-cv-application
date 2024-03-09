import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import EduStartDate from './EduStartDate';
import { EducationContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="eduStartDate">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input id="eduStartDate" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent({ id }) {
  const [educations, setEducations] = useState({
    fakeID: { eduStartDate: '' },
    fakeID2: { eduStartDate: '07 / 2017' },
  });

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <EduStartDate id={id} />
    </EducationContext.Provider>
  );
}

test('renders EduStartDate', () => {
  render(<MockParentComponent id="fakeID" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders EduStartDate with different initial value', () => {
  render(<MockParentComponent id="fakeID2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('07 / 2017');
});

test('updates eduStartDate value as a user types correct date', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '012022');
  expect(input).toHaveValue('01 / 2022');

  await user.clear(input);
  expect(input).toHaveValue('');
  await user.type(input, '07');
  expect(input).toHaveValue('07 / ');

  await user.type(input, '19');
  expect(input).toHaveValue('07 / 19');
});

test("doesn't update eduStartDate value if a user types incorrect date", async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '2');
  expect(input).toHaveValue('');

  await user.type(input, '00');
  expect(input).toHaveValue('0');

  await user.type(input, '918');
  expect(input).toHaveValue('09 / 1');

  await user.type(input, '9989');
  expect(input).toHaveValue('09 / 1998');
});
