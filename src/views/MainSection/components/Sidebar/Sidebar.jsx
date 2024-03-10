import { useContext, useState } from 'react';

import {
  Education,
  Experience,
  InvalidEduFormMsg,
  InvalidExpFormMsg,
  PersonalInformation,
  SidebarMenu,
  Summary,
} from './components';
import { EditPanel, EduBtnWrapper, ExpBtnWrapper } from 'src/components/layout';
import {
  EducationContext,
  EduErrMsgContext,
  ExperienceContext,
  ExpErrMsgContext,
  IndexContext,
  KeyContext,
} from 'src/hooks/Contexts';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { educations } = useContext(EducationContext);
  const { experiences } = useContext(ExperienceContext);
  const [activeKey, setActiveKey] = useState({
    eduActiveKey: Object.keys(educations)[0],
    expActiveKey: Object.keys(experiences)[0],
  });
  const [showExpErrMessage, setShowExpErrMessage] = useState(false);
  const [showEduErrMessage, setShowEduErrMessage] = useState(false);

  let activePanel = null;

  if (activeIndex === 0) {
    activePanel = <PersonalInformation />;
  } else if (activeIndex === 1) {
    activePanel = <Summary />;
  } else if (activeIndex === 2) {
    activePanel = (
      <>
        <Experience />
        <ExpErrMsgContext.Provider
          value={{ showExpErrMessage, setShowExpErrMessage }}
        >
          <ExpBtnWrapper />
          <InvalidExpFormMsg />
        </ExpErrMsgContext.Provider>
      </>
    );
  } else if (activeIndex === 3) {
    activePanel = (
      <>
        <Education />
        <EduErrMsgContext.Provider
          value={{ showEduErrMessage, setShowEduErrMessage }}
        >
          <EduBtnWrapper />
          <InvalidEduFormMsg />
        </EduErrMsgContext.Provider>
      </>
    );
  }

  return (
    <aside
      className={
        styles.sidebar + (activeIndex !== null ? ` ${styles.active}` : '')
      }
    >
      <IndexContext.Provider value={{ activeIndex, setActiveIndex }}>
        <SidebarMenu />
        {activeIndex !== null && (
          <KeyContext.Provider value={{ activeKey, setActiveKey }}>
            <EditPanel>{activePanel}</EditPanel>
          </KeyContext.Provider>
        )}
      </IndexContext.Provider>
    </aside>
  );
}

export default Sidebar;
