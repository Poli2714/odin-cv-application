import PropTypes from 'prop-types';

import styles from './Label.module.css';

function Label({ labelFor, labelName }) {
  return (
    <label data-testid="label" htmlFor={labelFor} className={styles.labelName}>
      {labelName}
    </label>
  );
}

Label.propTypes = {
  labelFor: PropTypes.string,
  labelName: PropTypes.string,
};

export default Label;
