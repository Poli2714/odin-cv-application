import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import InvalidEduFormMsg from './InvalidEduFormMsg';
import { EduErrMsgContext } from 'src/hooks/Contexts';

vi.mock('src/components/errors', () => ({
  InvalidFormMessage: vi.fn(() => (
    <p data-testid="error">Mock error message</p>
  )),
}));

function MockParentComponent({ showEduErrMessage }) {
  return (
    <EduErrMsgContext.Provider value={{ showEduErrMessage }}>
      <InvalidEduFormMsg />
    </EduErrMsgContext.Provider>
  );
}

test('renders InvalidEduFormMsg', () => {
  const showEduErrMessage = true;

  render(<MockParentComponent showEduErrMessage={showEduErrMessage} />);

  expect(screen.getByTestId('error')).toBeInTheDocument();
});

test("doesn't render InvalidEduFormMsg", () => {
  const showEduErrMessage = false;

  render(<MockParentComponent showEduErrMessage={showEduErrMessage} />);

  expect(screen.queryByTestId('error')).not.toBeInTheDocument();
});
