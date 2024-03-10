import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import UploadPicture from './UploadPicture';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import ProfilePictureIcon from 'src/assets/profile-pic2.svg';

vi.mock('src/components/ui', () => ({
  Photo: vi.fn(({ src }) => <img alt="test" src={src} />),
}));

vi.mock('src/components/forms', () => ({
  Label: vi.fn(() => <label htmlFor="photo">Mock label</label>),
}));

function MockParentComponent() {
  const [personalInfo, setPersonalInfo] = useState({
    profilePicture: ProfilePictureIcon,
  });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <UploadPicture />
    </PersonalInfoContext.Provider>
  );
}

test('renders UploadPicture', () => {
  render(<UploadPicture />);

  expect(screen.getByTestId('profile-picture')).toBeInTheDocument();
});

test('renders default profile picture correctly', () => {
  render(<MockParentComponent />);
  const profilePicture = screen.getByRole('img');

  expect(profilePicture).toBeInTheDocument();
  expect(profilePicture.src).toMatch(/src\/assets\/profile-pic2.svg$/);
});

test.skip('updates img source when user uploads a picture', async () => {
  const imgFile = new File(['test'], 'test.png', { type: 'image/png' });
  const user = userEvent.setup();

  render(<MockParentComponent />);
  // const label = screen.getByLabelText('Mock label');
  // await user.click(label);
  const input = screen.getByTestId('file-input');

  await user.upload(input, imgFile);
  screen.debug();
  expect(input.files).toHaveLength(1);
  expect(input.files[0]).toBe(imgFile);
});
