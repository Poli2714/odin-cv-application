import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import PropTypes from 'prop-types';

import JobStartDate from './JobStartDate';
import { ExperienceContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="jobStartDate">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input type="text" id="jobStartDate" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent({ id }) {
  const [experiences, setExperiences] = useState({
    testId: { jobStartDate: '' },
    testId2: { jobStartDate: '07 / 2017' },
  });

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <JobStartDate id={id} />
    </ExperienceContext.Provider>
  );
}

MockParentComponent.propTypes = {
  id: PropTypes.string,
};

test('renders JobStartDate', () => {
  render(<MockParentComponent id="testId" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders JobStartDate with different value', () => {
  render(<MockParentComponent id="testId2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('07 / 2017');
});

test('updates jobStartDate value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '022020');
  expect(input).toHaveValue('02 / 2020');

  await user.clear(input);
  await user.type(input, '101988');
  expect(input).toHaveValue('10 / 1988');

  await user.clear(input);
  await user.type(input, '07');
  expect(input).toHaveValue('07 / ');
});

test("doesn't update jobstartDate value as a user enters an invalid number", async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, '13');
  expect(input).toHaveValue('1');

  await user.type(input, '22024');
  expect(input).toHaveValue('12 / 202');
});
