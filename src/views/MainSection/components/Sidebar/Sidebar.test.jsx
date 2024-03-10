import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

vi.mock('./components', () => ({
  SidebarMenu: vi.fn(() => <div data-testid="sidebar-menu">Mock Sidebar</div>),
}));

test('renders Sidebar', () => {
  render(<Sidebar />);

  expect(screen.getByRole('complementary')).toBeInTheDocument();
});
