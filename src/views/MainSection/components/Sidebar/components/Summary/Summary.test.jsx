import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Summary from './Summary';
import { SummaryContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  InputWrapper: vi.fn(({ children }) => <div>{children}</div>),
}));

vi.mock('src/components/forms', () => ({
  Form: vi.fn(({ children }) => (
    <form action="" data-testid="form" method="get">
      {children}
    </form>
  )),
  Label: vi.fn(() => <label htmlFor="summary">Mock label</label>),
  TextArea: vi.fn(({ value, onChange }) => (
    <textarea
      id="summary"
      rows={10}
      maxLength={200}
      value={value}
      onChange={onChange}
    ></textarea>
  )),
}));

vi.mock('src/components/ui', () => ({
  CharacterLimit: vi.fn(({ children, value }) => (
    <div>
      <span data-testid="limit">{value.length} / 200</span>
      {children}
    </div>
  )),
}));

function MockParenComponent() {
  const [summary, setSummary] = useState('');

  return (
    <SummaryContext.Provider value={{ summary, setSummary }}>
      <Summary />
    </SummaryContext.Provider>
  );
}

test('renders Summary', () => {
  render(<Summary />);

  expect(screen.getByTestId('form')).toMatchSnapshot();
});

test('renders initial summary values correctly', () => {
  render(<MockParenComponent />);
  expect(screen.getByLabelText('Mock label')).toHaveValue('');
  expect(screen.getByTestId('limit')).toHaveTextContent('0 / 200');
});

test('updates summary value as a user types', async () => {
  const user = userEvent.setup();

  render(<MockParenComponent />);
  const textarea = screen.getByLabelText('Mock label');
  const limitSpan = screen.getByTestId('limit');

  await user.type(textarea, 'This is a short summary');
  expect(textarea).toHaveValue('This is a short summary');
  expect(limitSpan).toHaveTextContent('23 / 200');

  await user.clear(textarea);
  await user.type(textarea, 'hello');
  expect(textarea).toHaveValue('hello');
  expect(limitSpan).toHaveTextContent('5 / 200');
});

test('renders Summary with correct number of characters when user reaches the limit', async () => {
  const user = userEvent.setup();

  render(<MockParenComponent />);
  const textarea = screen.getByLabelText('Mock label');

  await user.type(
    textarea,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi. Rhoncus urna neque viverra justo nec ultrices dui sapien.',
  );

  expect(textarea.value).toHaveLength(200);
  expect(screen.getByTestId('limit')).toHaveTextContent('200 / 200');
});
