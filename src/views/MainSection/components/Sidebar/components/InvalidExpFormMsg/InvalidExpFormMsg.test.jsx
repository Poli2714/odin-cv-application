import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import InvalidExpFormMsg from './InvalidExpFormMsg';
import { ExpErrMsgContext } from 'src/hooks/Contexts';

vi.mock('src/components/errors', () => ({
  InvalidFormMessage: vi.fn(() => (
    <p data-testid="error">Mock error message</p>
  )),
}));

function MockParentComponent({ showExpErrMessage }) {
  return (
    <ExpErrMsgContext.Provider value={{ showExpErrMessage }}>
      <InvalidExpFormMsg />
    </ExpErrMsgContext.Provider>
  );
}

test('renders InvalidExpFormMsg', () => {
  const showExpErrMessage = true;

  render(<MockParentComponent showExpErrMessage={showExpErrMessage} />);

  expect(screen.getByTestId('error')).toBeInTheDocument();
});

test("doesn't render InvalidExpFormMsg", () => {
  const showExpErrMessage = false;

  render(<MockParentComponent showExpErrMessage={showExpErrMessage} />);

  expect(screen.queryByTestId('error')).not.toBeInTheDocument();
});
