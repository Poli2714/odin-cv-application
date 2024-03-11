import { useContext } from 'react';

import { CVSection, CVSectionPart } from 'src/components/ui';
import { formatCVDates } from 'src/utils';
import { ExperienceContext } from 'src/hooks/Contexts';
import styles from './CVExperience.module.css';

const descriptionExample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae turpis id euismod. Nulla a neque finibus, euismod risus fringilla, pretium leo. Ut tempus massa sit amet quam mattis eu.';

function CVExperience() {
  const { experiences } = useContext(ExperienceContext);
  const isOnlyOneExp = Object.keys(experiences).length === 1;

  return (
    <CVSection sectionTitle="Experience">
      {Object.keys(experiences).map((key, i) => {
        const { jobTitle, employer, jobStartDate, jobEndDate, jobDescription } =
          experiences[key];
        return (
          <CVSectionPart
            key={key}
            title={jobTitle || (isOnlyOneExp && 'React developer')}
            subtitle={employer || (isOnlyOneExp && 'Facebook')}
            date={
              formatCVDates(jobStartDate, jobEndDate) ||
              (isOnlyOneExp && 'July 2020 - current')
            }
          >
            {(jobDescription || isOnlyOneExp || i === 0) && (
              <main>
                <p data-testid="cv-description" className={styles.description}>
                  {jobDescription || descriptionExample}
                </p>
              </main>
            )}
          </CVSectionPart>
        );
      })}
    </CVSection>
  );
}

export default CVExperience;
