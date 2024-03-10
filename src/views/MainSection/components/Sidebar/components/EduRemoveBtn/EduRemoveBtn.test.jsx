import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import EduRemoveBtn from './EduRemoveBtn';
import { EducationContext, KeyContext } from 'src/hooks/Contexts';

vi.mock('src/components/buttons', () => ({
  RemoveBtn: vi.fn(({ disabled }) => (
    <button disabled={disabled}>Mock click</button>
  )),
}));

function MockParentComponent({ activeKey, educations }) {
  return (
    <EducationContext.Provider value={{ educations }}>
      <KeyContext.Provider value={{ activeKey }}>
        <EduRemoveBtn />
      </KeyContext.Provider>
    </EducationContext.Provider>
  );
}

test('renders EduRemoveBtn', () => {
  render(<EduRemoveBtn />);

  expect(screen.getByRole('button')).toMatchSnapshot();
});

test('disables RemoveBtn if there is only one education', async () => {
  const educations = { id: { someData: '' } };
  const activeKey = { eduActiveKey: 'key' };

  render(<MockParentComponent activeKey={activeKey} educations={educations} />);
  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
});

test('disables RemoveBtn if there are more than one experience and all are collapsed (not displayed)', () => {
  const educations = {
    id: { someData: 'foo' },
    id2: { someOtherData: 'bar' },
  };
  const activeKey = { eduActiveKey: '' };

  render(<MockParentComponent activeKey={activeKey} educations={educations} />);
  const button = screen.getByRole('button');

  expect(button).toBeDisabled();
});

test('enables RemoveBtn if there are more than one experience and one of them is expanded (displayed)', () => {
  const educations = {
    id: { someData: 'foo' },
    id2: { someOtherData: 'bar' },
  };
  const activeKey = { eduActiveKey: 'hey' };

  render(<MockParentComponent activeKey={activeKey} educations={educations} />);
  const button = screen.getByRole('button');

  expect(button).toBeEnabled();
});
