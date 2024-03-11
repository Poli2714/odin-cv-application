import PropTypes from 'prop-types';

import styles from './CVSectionPart.module.css';

function CVSectionPart({ children, date, subtitle, title }) {
  return (
    <div data-testid="cv-section-part" className={styles.sectionPart}>
      <header className={styles.partHeader}>
        <h4 className={styles.partTitle}>{title}</h4>
        <span data-testid="subtitle" className={styles.partSubtitle}>
          {subtitle}
        </span>
        <span data-testid="date" className={styles.partDate}>
          {date}
        </span>
      </header>
      {children}
    </div>
  );
}

CVSectionPart.propTypes = {
  children: PropTypes.node,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default CVSectionPart;
