import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ children, clName, onClick }) {
  return (
    <button className={`${styles.btn} ${clName}`} onClick={onClick}>
      <div className={styles.wrapper}>{children}</div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  clName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
