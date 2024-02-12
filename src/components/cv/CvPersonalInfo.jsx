import '../../styles/cv/CvPersonalInfo.css';
import EmailIcon from '../../assets/email.svg';
import PhoneIcon from '../../assets/mobile.svg';
import LocationIcon from '../../assets/location.svg';

function FullName({ name }) {
  return <h2 className="cv__full-name">{name}</h2>;
}

function CurrentPosition({ currentJobTitle }) {
  return <p className="cv__current-position">{currentJobTitle}</p>;
}

function ContactInfo({ altText, icon, children }) {
  return (
    <div className="cv__contacts__info">
      <img src={icon} alt={altText} height={15} width={15} />
      {children}
    </div>
  );
}

function ContactEmail({ email }) {
  return (
    <ContactInfo altText="Email icon" icon={EmailIcon}>
      <a href={`mailto:${email}`}>{email}</a>
    </ContactInfo>
  );
}

function ContactPhone({ phoneNumber }) {
  return (
    <ContactInfo altText="Phone icon" icon={PhoneIcon}>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </ContactInfo>
  );
}

function ContactLocation({ city }) {
  return (
    <ContactInfo altText="Location icon" icon={LocationIcon}>
      <span>{city}</span>
    </ContactInfo>
  );
}

function Contacts({ email, phoneNumber, city }) {
  return (
    <div className="cv__contacts">
      {email ? <ContactEmail email={email} /> : null}
      {phoneNumber ? <ContactPhone phoneNumber={phoneNumber} /> : null}
      {city ? <ContactLocation city={city} /> : null}
    </div>
  );
}

export default function CvPersonalInfo({ personalInfo }) {
  const { fullName, currentJobTitle, email, mobile, city } = personalInfo;

  return (
    <section className="cv__personal-info">
      <div className="cv__personal-info__text">
        <FullName name={fullName} />
        <CurrentPosition currentJobTitle={currentJobTitle} />
        <Contacts email={email} phoneNumber={mobile} city={city} />
      </div>
      <div className="cv__personal-info__picture"></div>
    </section>
  );
}
