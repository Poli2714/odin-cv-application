import '../../styles/cv/CvSection.css';

import CvSectionPart from './CvSectionPart';

export default function CvSection({
  sectionTitle,
  partTitle,
  subtitle,
  startDate,
  endDate,
  children,
}) {
  return (
    <section className="cv__section">
      <h3 className="cv-section__title">{sectionTitle}</h3>
      <CvSectionPart
        title={partTitle}
        subtitle={subtitle}
        date={`${startDate} - ${endDate}`}
      >
        {children}
      </CvSectionPart>
    </section>
  );
}
