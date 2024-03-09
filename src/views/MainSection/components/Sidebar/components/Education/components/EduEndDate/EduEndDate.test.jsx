import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import EduEndDate from './EduEndDate';
import { EducationContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="eduEndDate">Mock label</label>),
  TextInput: vi.fn(({ disabled, onChange, value }) => (
    <input
      disabled={disabled}
      id="eduEndDate"
      type="text"
      onChange={onChange}
      value={value}
    />
  )),
}));

function MockParentComponent({ id }) {
  const [educations, setEducations] = useState({
    fakeID: { eduEndDate: '', eduStartDate: '07 / 2000' },
    fakeID2: { eduEndDate: '03 / 2024', eduStartDate: '05 / 1999' },
    fakeID3: { eduEndDate: '', eduStartDate: '04' },
    fakeID4: { eduEndDate: '', eduStartDate: '' },
  });

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <EduEndDate id={id} />
    </EducationContext.Provider>
  );
}

test('renders EduEndDate', () => {
  render(<MockParentComponent id="fakeID" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders EduEndDate with different initial value', () => {
  render(<MockParentComponent id="fakeID2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('03 / 2024');
});

test('updates eduEndDate value as a user types correct date', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '092000');
  expect(input).toHaveValue('09 / 2000');

  await user.clear(input);
  await user.type(input, '02');
  expect(input).toHaveValue('02 / ');

  await user.type(input, '20213');
  expect(input).toHaveValue('02 / 2021');
});

test("doesn't update eduEndDate value if a user types incorrect date", async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '2');
  expect(input).toHaveValue('');

  await user.type(input, '012000');
  expect(input).toHaveValue('01 / 200');

  await user.clear(input);
  await user.type(input, '0420098');
  expect(input).toHaveValue('04 / 2009');
});

test('renders EduEndDate as disabled if edustartDate value is invalid', () => {
  render(<MockParentComponent id="fakeID3" />);

  expect(screen.getByLabelText('Mock label')).toBeDisabled();
});

test('renders EduEndDate as disabled if edustartDate value is empty', () => {
  render(<MockParentComponent id="fakeID4" />);

  expect(screen.getByLabelText('Mock label')).toBeDisabled();
});
