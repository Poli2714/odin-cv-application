import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';

import ExpAddMoreBtn from './ExpAddMoreBtn';
import {
  ExperienceContext,
  ExpErrMsgContext,
  KeyContext,
} from 'src/hooks/Contexts';

vi.mock('src/components/buttons', () => ({
  AddMoreBtn: vi.fn(({ onClick }) => (
    <button onClick={onClick}>Mock Add</button>
  )),
}));

function MockParentComponent() {
  const [experiences, setExperiences] = useState({ fakeID: { someData: '' } });
  const [activeKey, setActiveKey] = useState({ expActiveKey: '' });
  const [showExpErrMessage, setShowExpErrMessage] = useState(false);

  return (
    <ExperienceContext.Provider value={{ experiences, setExperiences }}>
      <KeyContext.Provider value={{ activeKey, setActiveKey }}>
        <ExpErrMsgContext.Provider
          value={{ showExpErrMessage, setShowExpErrMessage }}
        >
          <ExpAddMoreBtn />
        </ExpErrMsgContext.Provider>
      </KeyContext.Provider>
    </ExperienceContext.Provider>
  );
}

test('renders ExpAddMoreBtn', () => {
  render(<MockParentComponent />);
  expect(screen.getByRole('button')).toMatchSnapshot();
});
