import '../../styles/forms/PersonalInfoForm.css';
import ProfilePicIcon from '../../assets/profile-pic.svg';

import InputElem from './InputElem';
import { personalInfoInputData } from '../../data/personalInfoInputData';

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

export default function PersonalInfoForm() {
  return (
    <form action="" method="get" className="cv-edit-panel__form">
      <UploadProfilePicture />
      {personalInfoInputData.map(input => (
        <InputElem
          key={input.labelFor}
          label={input.label}
          labelFor={input.labelFor}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </form>
  );
}
