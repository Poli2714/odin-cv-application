import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Degree from './Degree';
import { EducationContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => (
    <div data-testid="input-wrapper">{children}</div>
  )),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="degree">Mock label</label>),
  TextInput: vi.fn(({ onChange, value }) => (
    <input id="degree" type="text" onChange={onChange} value={value} />
  )),
}));

function MockParentComponent({ id }) {
  const [educations, setEducations] = useState({
    fakeID: { degree: '' },
    fakeID2: { degree: 'test' },
  });

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <Degree id={id} />
    </EducationContext.Provider>
  );
}

test('renders Degree', () => {
  render(<MockParentComponent id="fakeID" />);
  expect(screen.getByTestId('input-wrapper')).toMatchSnapshot();
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
});

test('renders Degree with different initial id', () => {
  render(<MockParentComponent id="fakeID2" />);

  expect(screen.getByLabelText('Mock label')).toHaveValue('test');
});

test('updates degree value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent id="fakeID" />);
  const input = screen.getByLabelText('Mock label');

  await user.type(input, 'High Magician');
  expect(input).toHaveValue('High Magician');
});
