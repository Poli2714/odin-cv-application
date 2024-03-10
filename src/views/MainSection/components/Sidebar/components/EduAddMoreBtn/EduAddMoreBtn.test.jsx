import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useState } from 'react';

import EduAddMoreBtn from './EduAddMoreBtn';
import {
  EducationContext,
  EduErrMsgContext,
  KeyContext,
} from 'src/hooks/Contexts';

vi.mock('src/components/buttons', () => ({
  AddMoreBtn: vi.fn(({ onClick }) => (
    <button onClick={onClick}>Mock Add</button>
  )),
}));

function MockParentComponent() {
  const [educations, setEducations] = useState({ fakeID: { someData: '' } });
  const [activeKey, setActiveKey] = useState({ eduActiveKey: '' });
  const [showEduErrMessage, setShowEduErrMessage] = useState(false);

  return (
    <EducationContext.Provider value={{ educations, setEducations }}>
      <KeyContext.Provider value={{ activeKey, setActiveKey }}>
        <EduErrMsgContext.Provider
          value={{ showEduErrMessage, setShowEduErrMessage }}
        >
          <EduAddMoreBtn />
        </EduErrMsgContext.Provider>
      </KeyContext.Provider>
    </EducationContext.Provider>
  );
}

test('renders EduAddMoreBtn', () => {
  render(<MockParentComponent />);
  expect(screen.getByRole('button')).toMatchSnapshot();
});
