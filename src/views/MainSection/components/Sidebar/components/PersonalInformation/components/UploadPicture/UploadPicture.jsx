import { useContext } from 'react';

import { Photo } from 'src/components/ui';
import { Label } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './UploadPicture.module.css';

function UploadPicture() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { profilePicture } = personalInfo;

  const handleChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalInfo({ ...personalInfo, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div data-testid="profile-picture" className={styles.uploadPhoto}>
      <p>Upload your photo</p>
      <Photo size={150} src={profilePicture} />
      <Label
        clName={styles.uploadPhotoLabel}
        labelFor="photo"
        labelName="Choose file"
      />
      <input
        accept="image/jpeg, image/png, image/jpg"
        className={styles.fileInput}
        data-testid="file-input"
        id="photo"
        name="photo"
        onChange={handleChange}
        type="file"
      />
    </div>
  );
}

export default UploadPicture;
