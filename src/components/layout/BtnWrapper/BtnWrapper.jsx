import PropTypes from 'prop-types';

import styles from './BtnWrapper.module.css';

function BtnWrapper({ children }) {
  return (
    <div data-testid="btn-wrapper" className={styles.btnWrapper}>
      {children}
    </div>
  );
}

BtnWrapper.propTypes = {
  children: PropTypes.node,
};

export default BtnWrapper;
