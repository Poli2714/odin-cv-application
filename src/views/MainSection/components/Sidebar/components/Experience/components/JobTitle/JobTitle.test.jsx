import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import PropTypes from 'prop-types';

import JobTitle from './JobTitle';
import { ExperienceContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="jobTitle">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input id="jobTitle" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent({ id }) {
  const [experiences, setExperiences] = useState({
    testId: { jobTitle: '' },
    testId2: { jobTitle: 'Web Developer' },
  });

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <JobTitle id={id} />
    </ExperienceContext.Provider>
  );
}

MockParentComponent.propTypes = {
  id: PropTypes.string,
};

test('renders JobTitle', () => {
  render(<MockParentComponent id="testId" />);

  expect(screen.getByLabelText('Mock label')).toMatchSnapshot();
});

test('renders jobTitle with initial value', () => {
  render(<MockParentComponent id="testId2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('Web Developer');
});

test('updates jobTitle value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, 'Developer');
  expect(input).toHaveValue('Developer');
  await user.clear(input);
  expect(input).toHaveValue('');
  await user.type(input, 'Frontend Developer');
  expect(input).toHaveValue('Frontend Developer');
});
