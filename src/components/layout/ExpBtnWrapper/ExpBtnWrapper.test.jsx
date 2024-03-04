import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ExpBtnWrapper from './ExpBtnWrapper';

vi.mock('..', () => ({
  BtnWrapper: vi.fn(({ children }) => (
    <div data-testid="test-wrapper">{children}</div>
  )),
}));

vi.mock('src/views/MainSection/components/Sidebar/components', () => ({
  ExpAddMoreBtn: vi.fn(() => (
    <div data-testid="test-add">
      <h1>Hello world!</h1>
      <button>Test click</button>
    </div>
  )),
  ExpRemoveBtn: vi.fn(() => (
    <div data-testid="test-remove">
      <label htmlFor="test">Test label</label>
      <input id="test" name="test" type="text" />
    </div>
  )),
}));

test('renders ExpBtnWrapper', () => {
  render(<ExpBtnWrapper />);

  expect(screen.getByTestId('test-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('test-add')).toBeInTheDocument();
  expect(screen.getByTestId('test-remove')).toBeInTheDocument();
});
