import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProfilePicture from './ProfilePicture';

test('Profile picture is rendered on screen', () => {
  render(<ProfilePicture />);

  expect(screen.getByTestId('profile-picture')).toBeInTheDocument();
});
