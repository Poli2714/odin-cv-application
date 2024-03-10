import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ExpRemoveBtn from './ExpRemoveBtn';
import { ExperienceContext, KeyContext } from 'src/hooks/Contexts';

vi.mock('src/components/buttons', () => ({
  RemoveBtn: vi.fn(({ disabled }) => (
    <button disabled={disabled}>Mock click</button>
  )),
}));

function MockParentComponent({ activeKey, experiences }) {
  return (
    <ExperienceContext.Provider value={{ experiences }}>
      <KeyContext.Provider value={{ activeKey }}>
        <ExpRemoveBtn />
      </KeyContext.Provider>
    </ExperienceContext.Provider>
  );
}

test('renders ExpRemoveBtn', () => {
  render(<ExpRemoveBtn />);

  expect(screen.getByRole('button')).toMatchSnapshot();
});

test('disables RemoveBtn if there is only one experience', async () => {
  const experiences = { id: { someData: '' } };
  const activeKey = { expActiveKey: 'key' };

  render(
    <MockParentComponent activeKey={activeKey} experiences={experiences} />,
  );
  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
});

test('disables RemoveBtn if there are more than one experience and all are collapsed (not displayed)', () => {
  const experiences = {
    id: { someData: 'foo' },
    id2: { someOtherData: 'bar' },
  };
  const activeKey = { expActiveKey: '' };

  render(
    <MockParentComponent activeKey={activeKey} experiences={experiences} />,
  );
  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
});

test('enables RemoveBtn if there are more than one experience and one of them is expanded (displayed)', () => {
  const experiences = {
    id: { someData: 'foo' },
    id2: { someOtherData: 'bar' },
  };
  const activeKey = { expActiveKey: 'hey' };

  render(
    <MockParentComponent activeKey={activeKey} experiences={experiences} />,
  );
  const button = screen.getByRole('button');

  expect(button).toBeEnabled();
});
