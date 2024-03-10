import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import SidebarMenu from './SidebarMenu';
import { IndexContext } from 'src/hooks/Contexts';

function MockParentComponent({ index }) {
  const [activeIndex, setActiveIndex] = useState(index);
  return (
    <IndexContext.Provider value={{ activeIndex, setActiveIndex }}>
      <SidebarMenu />
    </IndexContext.Provider>
  );
}

test('renders Sidebar menu with 4 menu items', () => {
  render(<MockParentComponent index={null} />);

  expect(screen.getByTestId('sidebar-menu')).toMatchSnapshot();
  expect(screen.getAllByRole('listitem').length).toEqual(4);
});

test('all sidebar menu items have expand icon as img src on initial render', () => {
  render(<MockParentComponent index={null} />);

  const images = screen.getAllByRole('img');
  images.forEach(img => {
    expect(img.src).toMatch(/\/expand.svg$/i);
    expect(img.alt).toEqual('Plus sign');
  });
});

test('renders correct img alt when pressed on different menu item', async () => {
  const user = userEvent.setup();

  render(<MockParentComponent index={0} />);
  const images = screen.getAllByRole('img');
  images.forEach((img, i) => {
    if (i === 0) {
      expect(img.src).toMatch(/\/collapse.svg$/i);
      expect(img.alt).toEqual('Minus sign');
    } else {
      expect(img.src).toMatch(/\/expand.svg$/i);
      expect(img.alt).toEqual('Plus sign');
    }
  });

  await user.click(screen.getAllByRole('listitem')[2]);

  images.forEach((img, i) => {
    if (i === 2) {
      expect(img.src).toMatch(/\/collapse.svg$/i);
      expect(img.alt).toEqual('Minus sign');
    } else {
      expect(img.src).toMatch(/\/expand.svg$/i);
      expect(img.alt).toEqual('Plus sign');
    }
  });
});
