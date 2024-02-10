import '../styles/SidebarAndCVEditPanel.css';

import CVEditPanel from './CVEditPanel';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import PersonalInfoForm from './forms/PersonalInfoForm';
import Sidebar from './Sidebar';
import SummaryForm from './forms/SummaryForm';

import { useState } from 'react';

const formComponents = [
  <PersonalInfoForm key={'info'} />,
  <SummaryForm key={'summary'} />,
  <ExperienceForm key={'exp'} />,
  <EducationForm key={'edu'} />,
];

export default function SidebarAndCVEditPanel() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClosePanel = () => setActiveIndex(null);
  const handleExpandOrCollapse = num =>
    activeIndex !== num ? setActiveIndex(num) : setActiveIndex(null);

  return (
    <aside className="sidebar-and-edit-panel">
      <Sidebar
        onExpandOrCollapse={handleExpandOrCollapse}
        activeIndex={activeIndex}
      />
      {activeIndex !== null ? (
        <CVEditPanel onClosePanel={handleClosePanel}>
          {formComponents[activeIndex]}
        </CVEditPanel>
      ) : null}
    </aside>
  );
}
