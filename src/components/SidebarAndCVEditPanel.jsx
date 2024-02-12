import '../styles/SidebarAndCVEditPanel.css';

import CVEditPanel from './CVEditPanel';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import PersonalInfoForm from './forms/PersonalInfoForm';
import Sidebar from './Sidebar';
import SummaryTextarea from './forms/SummaryTextarea';

import { useState } from 'react';

export default function SidebarAndCVEditPanel({ cvForm, handleChange }) {
  const { personalInfo, summary, experience, education } = cvForm;
  const { handleChangeSummary } = handleChange;

  const [activeIndex, setActiveIndex] = useState(null);
  let activeFormPanel = null;

  const handleClosePanel = () => setActiveIndex(null);
  const handleExpandOrCollapse = num =>
    activeIndex !== num ? setActiveIndex(num) : setActiveIndex(null);

  if (activeIndex === 0)
    activeFormPanel = (
      <PersonalInfoForm personalInfo={personalInfo} onChange={handleChange} />
    );
  else if (activeIndex === 1)
    activeFormPanel = (
      <SummaryTextarea
        summary={summary}
        onChangeSummary={handleChangeSummary}
      />
    );
  else if (activeIndex === 2)
    activeFormPanel = (
      <ExperienceForm experience={experience} onChange={handleChange} />
    );
  else if (activeIndex === 3)
    activeFormPanel = (
      <EducationForm education={education} onChange={handleChange} />
    );

  return (
    <aside className="sidebar-and-edit-panel">
      <Sidebar
        onExpandOrCollapse={handleExpandOrCollapse}
        activeIndex={activeIndex}
      />
      {activeIndex !== null ? (
        <CVEditPanel onClosePanel={handleClosePanel}>
          {activeFormPanel}
        </CVEditPanel>
      ) : null}
    </aside>
  );
}
