import PropTypes from 'prop-types';

import styles from './CVSection.module.css';

function CVSection({ children, sectionTitle }) {
  return (
    <section data-testid="cv-section" className={styles.cvSection}>
      <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
      {children}
    </section>
  );
}

CVSection.propTypes = {
  children: PropTypes.node,
  sectionTitle: PropTypes.string,
};

export default CVSection;
