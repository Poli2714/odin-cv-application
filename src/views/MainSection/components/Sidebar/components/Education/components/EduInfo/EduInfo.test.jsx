import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import EduInfo from './EduInfo';
import { EducationContext } from 'src/hooks/Contexts';

vi.mock('src/components/ui', () => ({
  CharacterLimit: vi.fn(({ children, value }) => (
    <div>
      <span data-testid="limit">{value.length} / 100</span>
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
  Label: vi.fn(() => <label htmlFor="eduInfo">Mock label</label>),
  TextArea: vi.fn(({ onChange, value }) => (
    <textarea
      id="eduInfo"
      maxLength={100}
      onChange={onChange}
      rows={5}
      value={value}
    ></textarea>
  )),
}));

function MockParentComponent({ id }) {
  const [educations, setEducations] = useState({
    fakeID: { eduInfo: '' },
    fakeID2: { eduInfo: 'Test info' },
  });

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <EduInfo id={id} />
    </EducationContext.Provider>
  );
}

test('renders EduInfo', () => {
  render(<MockParentComponent id="fakeID" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders EduInfo with different initial value', () => {
  render(<MockParentComponent id="fakeID2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('Test info');
});

test('updates eduInfo value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const textarea = screen.getByLabelText('Mock label');
  const limitSpan = screen.getByTestId('limit');

  await user.type(textarea, 'Testing component');
  expect(textarea).toHaveValue('Testing component');
  expect(limitSpan).toHaveTextContent('17 / 100');

  await user.type(textarea, '. Test!');
  expect(textarea).toHaveValue('Testing component. Test!');
  expect(limitSpan).toHaveTextContent('24 / 100');
});

test("doesn't update eduInfo value if a user types over character limit", async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const textarea = screen.getByLabelText('Mock label');
  const limitSpan = screen.getByTestId('limit');

  await user.type(
    textarea,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo vel placerat feugiat.',
  );
  expect(textarea.value).toHaveLength(100);
  expect(limitSpan).toHaveTextContent('100 / 100');

  await user.type(textarea, ' Hey!');
  expect(textarea.value).toHaveLength(100);
  expect(limitSpan).toHaveTextContent('100 / 100');
});
