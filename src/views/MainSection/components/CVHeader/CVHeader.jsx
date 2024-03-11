import { useContext } from 'react';
import PropTypes from 'prop-types';

import { Photo } from 'src/components/ui';
import { PersonalInfoContext, SummaryContext } from 'src/hooks/Contexts';
import styles from './CVHeader.module.css';
import EmailIcon from 'src/assets/email.svg';
import MobileIcon from 'src/assets/mobile.svg';
import LocationIcon from 'src/assets/location.svg';

function CVFullName() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { fullName } = personalInfo;

  return <h2 className={styles.fullName}>{fullName || 'James Owen'}</h2>;
}

function CVCurrentJobTitle() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { currentJobTitle } = personalInfo;

  return (
    <p data-testid="cv-job-title" className={styles.currentjobTitle}>
      {currentJobTitle || 'React developer'}
    </p>
  );
}

const size = 15;

function ContactWrapper({ altText, children, icon }) {
  return (
    <div data-testid="contact-wrapper" className={styles.contactWrapper}>
      <img src={icon} alt={altText} height={size} width={size} />
      {children}
    </div>
  );
}

ContactWrapper.propTypes = {
  altText: PropTypes.string,
  children: PropTypes.element,
  icon: PropTypes.string,
};

function ContactEmail() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { email } = personalInfo;

  return (
    <ContactWrapper altText="Email icon" icon={EmailIcon}>
      <a href={`mailto:${email}`}>{email || 'james.owen@example.com'}</a>
    </ContactWrapper>
  );
}

function ContactMobile() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { mobile } = personalInfo;

  return (
    <ContactWrapper altText="Mobile icon" icon={MobileIcon}>
      <a href={`tel:${mobile}`}>{mobile || '+1234567890'}</a>
    </ContactWrapper>
  );
}

function ContactLocation() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { city } = personalInfo;

  return (
    <ContactWrapper altText="Location icon" icon={LocationIcon}>
      <span data-testid="cv-location">{city || 'Vancouver'}</span>
    </ContactWrapper>
  );
}

function Contacts() {
  return (
    <div data-testid="contacts" className={styles.contacts}>
      <ContactEmail />
      <ContactMobile />
      <ContactLocation />
    </div>
  );
}

const summaryExample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae turpis id euismod. Nulla a neque finibus, euismod risus fringilla, pretium leo. Ut tempus massa sit amet quam mattis eu.';

function CVSummary() {
  const { summary } = useContext(SummaryContext);

  return (
    <section data-testid="cv-summary">
      <p className={styles.summary}>{summary || summaryExample}</p>
    </section>
  );
}

const photoSize = 100;

function CVHeader() {
  const { personalInfo } = useContext(PersonalInfoContext);
  const { profilePicture } = personalInfo;

  return (
    <header className={styles.cvHeader}>
      <section className={styles.details}>
        <div className={styles.personalInfo}>
          <CVFullName />
          <CVCurrentJobTitle />
          <Contacts />
        </div>
        {profilePicture !== '/src/assets/profile-pic2.svg' && (
          <Photo size={photoSize} src={profilePicture} />
        )}
      </section>
      <CVSummary />
    </header>
  );
}

export default CVHeader;
export {
  CVFullName,
  CVCurrentJobTitle,
  ContactWrapper,
  ContactEmail,
  ContactMobile,
  ContactLocation,
  Contacts,
  CVSummary,
};
