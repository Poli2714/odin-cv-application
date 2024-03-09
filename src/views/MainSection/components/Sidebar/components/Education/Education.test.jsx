import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Education from './Education';
import { EducationContext, KeyContext } from 'src/hooks/Contexts';

vi.mock('src/components/layout', () => ({
  FormWrapper: vi.fn(({ children }) => (
    <div data-testid="form-wrapper">{children}</div>
  )),
  DateInputsWrapper: vi.fn(() => null),
}));

vi.mock('src/components/forms', () => ({
  Form: vi.fn(() => (
    <form action="" data-testid="form" method="get">
      <label htmlFor="test">Mock label</label>
      <input type="text" id="test" />
    </form>
  )),
}));

vi.mock('src/components/ui', () => ({
  Group: vi.fn(({ isActive, label, onClick }) => (
    <div
      className={isActive ? 'inactive' : 'active'}
      data-testid="group"
      onClick={onClick}
    >
      <span data-testid="group-label">{label}</span>
    </div>
  )),
}));

const data1 = { fakeID: '' };
const data2 = { fakeID1: '', fakeID2: '', fakeID3: '' };

function MockParentComponent({ eduData, id }) {
  const [educations] = useState(eduData);
  const [activeKey, setActiveKey] = useState({ eduActiveKey: id });

  return (
    <EducationContext.Provider value={{ educations }}>
      <KeyContext.Provider value={{ activeKey, setActiveKey }}>
        <Education />
      </KeyContext.Provider>
    </EducationContext.Provider>
  );
}

test('renders Education with single eduData', () => {
  render(<MockParentComponent eduData={data1} id="fakeID" />);

  expect(screen.queryByTestId('form-wrapper')).not.toBeInTheDocument();
  expect(screen.getByTestId('form')).toMatchSnapshot();
  expect(screen.getAllByTestId('form')).toHaveLength(1);
});

test('renders Education with multiple eduData where only second form is active', () => {
  render(<MockParentComponent eduData={data2} id="fakeID2" />);
  const groups = screen.getAllByTestId('group');
  const groupLabels = screen.getAllByTestId('group-label');

  expect(groups).toHaveLength(3);
  groupLabels.forEach((label, i) => {
    expect(label).toHaveTextContent(`Education #${i + 1}`);
  });
  groups.forEach((group, i) => {
    i === 1
      ? expect(group).toHaveClass('active')
      : expect(group).toHaveClass('inactive');
  });
});

test('displays only three Groups without any form when a user clicks on an active Group', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent eduData={data2} id="fakeID3" />);
  const groups = screen.getAllByTestId('group');
  const activeGroup = groups[2];

  expect(groups).toHaveLength(3);
  expect(activeGroup).toHaveClass('active');
  expect(screen.getByTestId('form')).toBeInTheDocument();

  await user.click(activeGroup);
  groups.forEach(group => {
    expect(group).toHaveClass('inactive');
  });
  expect(screen.queryByTestId('form')).not.toBeInTheDocument();
});
