import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHeader from './PageHeader';

vi.mock('./components', () => ({
  BrandLogo: vi.fn(() => <div data-testid="brand logo">Brand logo</div>),
  DownloadBtn: vi.fn(() => <button>Download</button>),
  ShareBtn: vi.fn(() => <button>Share</button>),
  ProfilePicture: vi.fn(() => (
    <div data-testid="profile picture">Profile Picture</div>
  )),
}));

test('renders page header', () => {
  render(<PageHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByTestId('brand logo')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument();
  expect(screen.getByTestId('profile picture')).toBeInTheDocument();
});
