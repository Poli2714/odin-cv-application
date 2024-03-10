import PropTypes from 'prop-types';

import styles from './SidebarMenuElement.module.css';
import ExpandIcon from 'src/assets/expand.svg';
import CollapseIcon from 'src/assets/collapse.svg';

const size = 20;

function SidebarMenuElement({ isActive, label }) {
  return (
    <div data-testid="menu-item" className={styles.menuElement}>
      {label}
      <img
        alt={isActive ? 'Minus sign' : 'Plus sign'}
        className={styles.icon}
        height={size}
        src={isActive ? CollapseIcon : ExpandIcon}
        width={size}
      />
    </div>
  );
}

SidebarMenuElement.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
};

export default SidebarMenuElement;
