import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SidebarMenuElement from './SidebarMenuElement';

test('renders SidebarMenuElement as an active menu element', () => {
  render(<SidebarMenuElement isActive={true} label="Test" />);
  const image = screen.getByRole('img');

  expect(screen.getByTestId('menu-item')).toBeInTheDocument();
  expect(image.alt).toEqual('Minus sign');
  expect(image.src).toMatch(/collapse.svg$/);
});

test('renders SidebarMenuElement as an inactive menu element', () => {
  render(<SidebarMenuElement isActive={false} label="Test" />);
  const image = screen.getByRole('img');

  expect(screen.getByTestId('menu-item')).toBeInTheDocument();
  expect(image.alt).toEqual('Plus sign');
  expect(image.src).toMatch(/expand.svg$/);
});
