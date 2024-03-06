import styles from './ProfilePicture.module.css';

function ProfilePicture() {
  return (
    <div
      data-testid="profile-picture"
      className={styles.navProfilePicture}
    ></div>
  );
}

export default ProfilePicture;
