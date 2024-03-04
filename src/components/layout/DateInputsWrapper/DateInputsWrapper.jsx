import PropTypes from 'prop-types';

import styles from './DateInputsWrapper.module.css';

function DateInputsWrapper({ children }) {
  return (
    <div data-testid="date-inputs-wrapper" className={styles.datesWrapper}>
      {children}
    </div>
  );
}

DateInputsWrapper.propTypes = {
  children: PropTypes.node,
};

export default DateInputsWrapper;
