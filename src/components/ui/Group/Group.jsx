import PropTypes from 'prop-types';

import styles from './Group.module.css';
import ArrowDownIcon from 'src/assets/arrowDown.svg';

const size = 20;

function Group({ isActive, label, onClick }) {
  return (
    <div data-testid="group" className={styles.group} onClick={onClick}>
      <span>{label}</span>
      <img
        alt={isActive ? 'Arrow up icon' : 'Arrow down icon'}
        className={isActive ? styles.expanded : styles.collapsed}
        height={size}
        src={ArrowDownIcon}
        width={size}
      />
    </div>
  );
}

Group.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Group;
