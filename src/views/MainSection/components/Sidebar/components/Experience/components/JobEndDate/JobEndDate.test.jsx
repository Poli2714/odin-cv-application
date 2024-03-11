import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import PropTypes from 'prop-types';

import JobEndDate from './JobEndDate';
import { ExperienceContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="jobEndDate">Mock label</label>),
  TextInput: vi.fn(({ disabled, onChange, value }) => (
    <input
      disabled={disabled}
      id="jobEndDate"
      type="text"
      onChange={onChange}
      value={value}
    />
  )),
}));

function MockParentComponent({ id }) {
  const [experiences, setExperiences] = useState({
    testId: { jobEndDate: '', jobStartDate: '07 / 2020' },
    testId2: { jobEndDate: '03 / 2024', jobStartDate: '01 / 1999' },
    testId3: { jobEndDate: '', jobStartDate: '01' },
  });

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <JobEndDate id={id} />
    </ExperienceContext.Provider>
  );
}

MockParentComponent.propTypes = {
  id: PropTypes.string,
};

test('renders JobEndDate', () => {
  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(input).not.toBeDisabled();
  expect(input).toHaveValue('');
});

test('renders JobEndDate with different initial value', () => {
  render(<MockParentComponent id="testId2" />);
  const input = screen.getByLabelText('Mock label');

  expect(input).not.toBeDisabled();
  expect(input).toHaveValue('03 / 2024');
});

test('disables jobEndDate input if jobStartDate is empty/incomplete', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId3" />);
  const input = screen.getByLabelText('Mock label');

  await user.click(input);
  expect(input).not.toHaveFocus();
  expect(input).toBeDisabled();
  await user.type(input, '12');
  expect(input).toHaveValue('');
});

test('updates jobEndDate value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '072023');
  expect(input).toHaveValue('07 / 2023');

  await user.clear(input);
  await user.type(input, '12');
  expect(input).toHaveValue('12 / ');

  await user.clear(input);
  await user.type(input, '1020221');
  expect(input).toHaveValue('10 / 2022');
});

test("doesn't update jobEndDate value when a user enters an invalid number", async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '2');
  expect(input).toHaveValue('');

  await user.type(input, ' ');
  expect(input).toHaveValue('');

  await user.type(input, '1021');
  expect(input).toHaveValue('10 / 2');

  await user.clear(input);
  await user.type(input, '2109475');
  expect(input).toHaveValue('10 / ');
});
