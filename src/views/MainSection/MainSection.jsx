import { useState } from 'react';

import { Sidebar } from './components';
import { CV } from 'src/components/layout';
import {
  PersonalInfoContext,
  SummaryContext,
  ExperienceContext,
  EducationContext,
} from 'src/hooks/Contexts';
import {
  initialPersonalInfoData,
  initialSummaryData,
  initialExpData,
  initialEduData,
} from 'src/data/initialFormData';
import styles from './MainSection.module.css';

export default function MainSection() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfoData);
  const [summary, setSummary] = useState(initialSummaryData);
  const [experiences, setExperiences] = useState(initialExpData);
  const [educations, setEducations] = useState(initialEduData);

  return (
    <main className={styles.mainSection}>
      <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
        <SummaryContext.Provider value={{ summary, setSummary }}>
          <ExperienceContext.Provider value={{ experiences, setExperiences }}>
            <EducationContext.Provider value={{ educations, setEducations }}>
              <Sidebar />
              <CV />
            </EducationContext.Provider>
          </ExperienceContext.Provider>
        </SummaryContext.Provider>
      </PersonalInfoContext.Provider>
    </main>
  );
}
