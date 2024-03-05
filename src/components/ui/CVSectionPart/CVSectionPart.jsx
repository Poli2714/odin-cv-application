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
  date: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default CVSectionPart;
