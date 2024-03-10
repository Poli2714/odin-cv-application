import { useContext } from 'react';

import SidebarMenuElement from './components/SidebarMenuElement/SidebarMenuElement';
import { IndexContext } from 'src/hooks/Contexts';
import styles from './SidebarMenu.module.css';

const sidebarMenuList = [
  {
    id: 'personalInfo',
    label: 'Personal Information',
  },
  {
    id: 'summary',
    label: 'Professional Summary',
  },
  {
    id: 'exp',
    label: 'Experience',
  },
  {
    id: 'edu',
    label: 'Education',
  },
];

function SidebarMenu() {
  const { activeIndex, setActiveIndex } = useContext(IndexContext);

  const handleClick = index =>
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex(null);

  return (
    <div data-testid="sidebar-menu" className={styles.sidebarMenu}>
      <ul>
        {sidebarMenuList.map((menuItem, i) => (
          <li key={menuItem.id} onClick={() => handleClick(i)}>
            <SidebarMenuElement
              label={menuItem.label}
              isActive={activeIndex === i}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
