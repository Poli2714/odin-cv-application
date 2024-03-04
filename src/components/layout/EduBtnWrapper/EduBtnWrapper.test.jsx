import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import EduBtnWrapper from './EduBtnWrapper';

vi.mock('..', () => ({
  BtnWrapper: vi.fn(({ children }) => (
    <div data-testid="test-wrapper">{children}</div>
  )),
}));

vi.mock('src/views/MainSection/components/Sidebar/components', () => ({
  EduAddMoreBtn: vi.fn(() => (
    <div data-testid="test-add">
      <h1>Test</h1>
      <button>Test click</button>
    </div>
  )),
  EduRemoveBtn: vi.fn(() => (
    <div data-testid="test-remove">
      <label htmlFor="test">Test label</label>
      <input id="test" name="test" type="text" />
    </div>
  )),
}));

test('renders EduBtnWrapper', () => {
  render(<EduBtnWrapper />);

  expect(screen.getByTestId('test-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('test-add')).toBeInTheDocument();
  expect(screen.getByTestId('test-remove')).toBeInTheDocument();
});
