import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import JobDescription from './JobDescription';
import { ExperienceContext } from 'src/hooks/Contexts';

vi.mock('src/components/ui', () => ({
  CharacterLimit: vi.fn(({ children, value }) => (
    <div>
      <span data-testid="limit">{value.length} / 200</span>
      {children}
    </div>
  )),
}));

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="jobDescription">Mock label</label>),
  TextArea: vi.fn(({ onChange, value }) => (
    <textarea
      id="jobDescription"
      rows={10}
      maxLength={200}
      onChange={onChange}
      value={value}
    ></textarea>
  )),
}));

function MockParentComponent({ id }) {
  const [experiences, setExperiences] = useState({
    testId: { jobDescription: '' },
    testId2: { jobDescription: 'Instagram' },
  });

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <JobDescription id={id} />
    </ExperienceContext.Provider>
  );
}

test('renders JobDescription', () => {
  render(<MockParentComponent id="testId" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
});

test('renders initial jobDescription value correctly', () => {
  render(<MockParentComponent id="testId2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('Instagram');
  expect(screen.getByTestId('limit')).toHaveTextContent('9 / 200');
});

test('updates jobDescription value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const textarea = screen.getByLabelText('Mock label');
  const limitSpan = screen.getByTestId('limit');

  expect(textarea).toHaveValue('');
  expect(limitSpan).toHaveTextContent('0 / 200');
  await user.type(textarea, 'Cool');
  expect(textarea).toHaveValue('Cool');
  expect(limitSpan).toHaveTextContent('4 / 200');
  await user.clear(textarea);
  await user.type(textarea, 'Hello');
  expect(textarea).toHaveValue('Hello');
  expect(limitSpan).toHaveTextContent('5 / 200');
});

test('renders jobDescription value with correct number of characters when user reaches the limit', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="testId" />);
  const textarea = screen.getByLabelText('Mock label');
  const limitSpan = screen.getByTestId('limit');

  await user.type(
    textarea,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed posuere nisl, in dignissim metus. Fusce maximus commodo iaculis. Sed placerat fringilla risus, sit amet malesuada lectus bibendum at. Pellentesque ac ex eu.',
  );

  expect(textarea.value).toHaveLength(200);
  expect(limitSpan).toHaveTextContent('200 / 200');
});
