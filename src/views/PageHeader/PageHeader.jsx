import { BrandLogo, DownloadBtn, ProfilePicture, ShareBtn } from './components';
import styles from './PageHeader.module.css';

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <nav className={styles.pageHeaderNav}>
        <BrandLogo />
        <div className={styles.navBtnContainer}>
          <DownloadBtn />
          <ShareBtn />
        </div>
        <ProfilePicture />
      </nav>
    </header>
  );
}

export default PageHeader;
