import '../../styles/forms/PersonalInfoForm.css';
import ProfilePicIcon from '../../assets/profile-pic.svg';

import InputElem from './InputElem';

function UploadProfilePicture() {
  return (
    <div className="edit-panel__upload-photo">
      <p>Upload your photo</p>
      <button className="edit-panel__upload-btn">
        <img
          src={ProfilePicIcon}
          alt="Default profile picture"
          height={100}
          width={100}
        />
      </button>
      <button className="edit-panel__browse-btn">Browse photos</button>
    </div>
  );
}

export function FullNameInput({ fullName, onChangeFullName }) {
  return (
    <InputElem label="Full name" labelFor="name">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="James Owen"
        value={fullName}
        onChange={onChangeFullName}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function CurrentJobTitleInput({
  currentJobTitle,
  onChangeCurrentJobTitle,
}) {
  return (
    <InputElem label="Job title" labelFor="jobTitle">
      <input
        type="text"
        name="jobTitle"
        id="jobTitle"
        placeholder="React developer"
        value={currentJobTitle}
        onChange={onChangeCurrentJobTitle}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function EmailAddressInput({ email, onChangeEmail }) {
  return (
    <InputElem label="Email address" labelFor="email">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="test@example.com"
        value={email}
        onChange={onChangeEmail}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function MobileNumberInput({ mobile, onChangeMobile }) {
  return (
    <InputElem label="Mobile number" labelFor="mobile">
      <input
        type="tel"
        name="mobile"
        id="mobile"
        placeholder="+12345678910"
        value={mobile}
        onChange={onChangeMobile}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function CityInput({ city, onChangeCity }) {
  return (
    <InputElem label="City" labelFor="location">
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Vancouver"
        value={city}
        onChange={onChangeCity}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export default function PersonalInfoForm({ personalInfo, onChange }) {
  const { fullName, currentJobTitle, email, mobile, city } = personalInfo;
  const {
    handleChangeFullName,
    handleChangeCurrentJobTitle,
    handleChangeEmail,
    handleChangeMobile,
    handleChangeCity,
  } = onChange;

  return (
    <form action="" method="get" className="cv-edit-panel__form">
      <UploadProfilePicture />
      <FullNameInput
        fullName={fullName}
        onChangeFullName={handleChangeFullName}
      />
      <CurrentJobTitleInput
        currentJobTitle={currentJobTitle}
        onChangeCurrentJobTitle={handleChangeCurrentJobTitle}
      />
      <EmailAddressInput email={email} onChangeEmail={handleChangeEmail} />
      <MobileNumberInput mobile={mobile} onChangeMobile={handleChangeMobile} />
      <CityInput city={city} onChangeCity={handleChangeCity} />
    </form>
  );
}
