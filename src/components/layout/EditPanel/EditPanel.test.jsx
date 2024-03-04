import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditPanel from './EditPanel';
import { IndexContext } from 'src/hooks/Contexts';

vi.mock('src/components/buttons', () => ({
  CloseBtn: vi.fn(({ onClick }) => (
    <button onClick={() => onClick(null)}>Click me</button>
  )),
}));

test('renders EditPanel', () => {
  render(<EditPanel />);

  expect(screen.getByTestId('edit-panel')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('renders EdiPanel together with children if provided', () => {
  render(
    <EditPanel>
      <h1>Hello World</h1>
      <button>Test button</button>
    </EditPanel>,
  );

  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Test button' }),
  ).toBeInTheDocument();
});

test('calls setActiveIndex when CloseBtn is clicked', async () => {
  const setActiveIndexMock = vi.fn();
  const user = userEvent.setup();

  render(
    <IndexContext.Provider value={{ setActiveIndex: setActiveIndexMock }}>
      <EditPanel />{' '}
    </IndexContext.Provider>,
  );

  await user.click(screen.getByRole('button'));
  expect(setActiveIndexMock).toHaveBeenCalledWith(null);
});
