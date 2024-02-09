import '../styles/PageHeader.css';
import BrandLogo from '../assets/brand-logo.svg';
import DownloadIcon from '../assets/download.svg';
import ShareIcon from '../assets/share.svg';

function Brand() {
  return (
    <div className="brand">
      <img src={BrandLogo} alt="MEK brand logo" width={50} height={50} />
      <h1 className="brand-name">MEK</h1>
    </div>
  );
}

function Button({ cl, children }) {
  return (
    <button className={'btn ' + cl}>
      <div className="btn__content-wrapper">{children}</div>
    </button>
  );
}

function DownloadBtn() {
  return (
    <Button cl="btn--download">
      <img src={DownloadIcon} alt="Download icon" width={24} height={24} />
      Download
    </Button>
  );
}

function ShareBtn() {
  return (
    <Button cl="btn--share">
      <img src={ShareIcon} alt="Share icon" width={24} height={24} />
      Share
    </Button>
  );
}

function ProfilePicture() {
  return <div className="nav__profile-picture"></div>;
}

function Navbar() {
  return (
    <nav className="page-header__nav">
      <Brand />
      <div className="nav__btn-container">
        <DownloadBtn />
        <ShareBtn />
      </div>
      <ProfilePicture />
    </nav>
  );
}

export default function PageHeader() {
  return (
    <header className="page-header">
      <Navbar />
    </header>
  );
}
