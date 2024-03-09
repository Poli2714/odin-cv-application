import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import University from './University';
import { EducationContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="university">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input id="university" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent({ id }) {
  const [educations, setEducations] = useState({
    fakeID: { university: '' },
    fakeID2: { university: 'Oxford' },
  });

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <University id={id} />
    </EducationContext.Provider>
  );
}

test('renders University', () => {
  render(<MockParentComponent id="fakeID" />);

  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders University with different initial value', () => {
  render(<MockParentComponent id="fakeID2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('Oxford');
});

test('updates university value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, 'Harvard');
  expect(input).toHaveValue('Harvard');

  await user.clear(input);
  expect(input).toHaveValue('');
  await user.type(input, 'Cambridge');
  expect(input).toHaveValue('Cambridge');
});
