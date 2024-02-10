import '../styles/Sidebar.css';
import ExpandIcon from '../assets/expand.svg';
import CollapseIcon from '../assets/collapse.svg';

import { sidebarMenuData } from '../data/sidebarMenuData';

function SidebarMenuElement({ label, isActive, alt }) {
  return (
    <div className="sidebar__menu-element">
      {label}
      <img
        src={isActive ? CollapseIcon : ExpandIcon}
        alt={alt}
        height={20}
        width={20}
        className="sidebar__menu-element__icon"
      />
    </div>
  );
}

export default function Sidebar({ onExpandOrCollapse, activeIndex }) {
  return (
    <div className="sidebar">
      <ul>
        {sidebarMenuData.map((item, i) => (
          <li key={item.id} onClick={() => onExpandOrCollapse(i)}>
            <SidebarMenuElement
              label={item.label}
              isActive={activeIndex === i}
              alt={activeIndex === i ? 'Minus sign' : 'Plus sign'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
