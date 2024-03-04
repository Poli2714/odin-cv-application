import PropTypes from 'prop-types';

import styles from './FormWrapper.module.css';

function FormWrapper({ children }) {
  return (
    <div data-testid="form-wrapper" className={styles.formWrapper}>
      {children}
    </div>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormWrapper;
