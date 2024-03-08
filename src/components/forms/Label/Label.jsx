import PropTypes from 'prop-types';

import styles from './Label.module.css';

function Label({ clName = '', labelFor, labelName }) {
  return (
    <label
      data-testid="label"
      htmlFor={labelFor}
      className={`${styles.labelName}${clName && ' ' + clName}`}
    >
      {labelName}
    </label>
  );
}

Label.propTypes = {
  clName: PropTypes.string,
  labelFor: PropTypes.string,
  labelName: PropTypes.string,
};

export default Label;
