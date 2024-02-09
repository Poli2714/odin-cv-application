import '../styles/Sidebar.css';

import AddIcon from '../assets/add.svg';

const menu = [
  {
    id: '01',
    label: 'Personal Information',
  },
  {
    id: '02',
    label: 'Professional Summary',
  },
  {
    id: '03',
    label: 'Experience',
  },
  {
    id: '04',
    label: 'Education',
  },
];

function SidebarMenuElement({ label, icon, alt }) {
  return (
    <div className="sidebar__menu-element">
      {label}
      <img
        src={icon}
        alt={alt}
        height={20}
        width={20}
        className="sidebar__menu-element__icon"
      />
    </div>
  );
}

function SidebarMenu() {
  return (
    <ul>
      {menu.map(item => (
        <li key={item.id}>
          <SidebarMenuElement
            label={item.label}
            icon={AddIcon}
            alt="Add icon"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarMenu />
    </aside>
  );
}
