import {
  CVEducation,
  CVExperience,
  CVHeader,
} from 'src/views/MainSection/components';
import styles from './CV.module.css';

function CV() {
  return (
    <section data-testid="cv" className={styles.cvWrapper}>
      <div className={styles.cv}>
        <CVHeader />
        <main>
          <CVExperience />
          <CVEducation />
        </main>
      </div>
    </section>
  );
}

export default CV;
