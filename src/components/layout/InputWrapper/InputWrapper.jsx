import PropTypes from 'prop-types';

import styles from './InputWrapper.module.css';

function InputWrapper({ children }) {
  return (
    <div data-testid="input-wrapper" className={styles.inputWrapper}>
      {children}
    </div>
  );
}

InputWrapper.propTypes = {
  children: PropTypes.node,
};

export default InputWrapper;
