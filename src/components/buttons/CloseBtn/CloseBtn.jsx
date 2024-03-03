import PropTypes from 'prop-types';

import styles from './CloseBtn.module.css';
import CloseIcon from 'src/assets/close.svg';

const size = 24;

function CloseBtn({ onClick }) {
  return (
    <button className={styles.closeBtn} onClick={onClick}>
      <img src={CloseIcon} alt="Close icon" height={size} width={size} />
    </button>
  );
}

CloseBtn.propTypes = {
  onClick: PropTypes.func,
};

export default CloseBtn;
