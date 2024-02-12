import '../../styles/cv/CvSectionPart.css';

export default function CvSectionPart({ title, subtitle, date, children }) {
  return (
    <div className="cv-section__part">
      <header className="cv-section-part__header">
        <h4 className="cv-section-part-header__title">{title}</h4>
        <span className="cv-section-part-header__subtitle">{subtitle}</span>
        <span className="cv-section-part-header__date">{date}</span>
      </header>
      {children}
    </div>
  );
}
