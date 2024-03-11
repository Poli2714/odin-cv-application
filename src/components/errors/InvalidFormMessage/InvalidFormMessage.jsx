import styles from './InvalidFormMessage.module.css';

function InvalidFormMessage() {
  return (
    <p data-testid="error-message" className={styles.invalidFormMessage}>
      Fill out previous form first
    </p>
  );
}

export default InvalidFormMessage;
