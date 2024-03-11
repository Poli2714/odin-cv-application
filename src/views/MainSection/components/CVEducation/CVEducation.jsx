import { useContext } from 'react';

import { CVSection, CVSectionPart } from 'src/components/ui';
import { formatCVDates } from 'src/utils';
import { EducationContext } from 'src/hooks/Contexts';
import styles from './CVEducation.module.css';

const descriptionExample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam dolor. Praesent commodo sed.';

function CVEducation() {
  const { educations } = useContext(EducationContext);
  const isOnlyOneEdu = Object.keys(educations).length === 1;

  return (
    <CVSection sectionTitle="Education">
      {Object.keys(educations).map((key, i) => {
        const { degree, university, eduStartDate, eduEndDate, eduInfo } =
          educations[key];

        return (
          <CVSectionPart
            key={key}
            title={degree || (isOnlyOneEdu && 'M.Sc. in Computer Science')}
            subtitle={university || (isOnlyOneEdu && 'Oxford University')}
            date={
              formatCVDates(eduStartDate, eduEndDate) ||
              (isOnlyOneEdu && 'September 2017 - May 2019')
            }
          >
            {(eduInfo || isOnlyOneEdu || i === 0) && (
              <main>
                <p data-testid="cv-description" className={styles.description}>
                  {eduInfo || descriptionExample}
                </p>
              </main>
            )}
          </CVSectionPart>
        );
      })}
    </CVSection>
  );
}

export default CVEducation;
