import AddMoreBtn from './AddMoreBtn';
import CharacterLimit from './CharacterLimit';
import InputElem from './InputElem';

export function DegreeInput({ degree, onChangeDegree }) {
  return (
    <InputElem label="Degree" labelFor="degree">
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="e.g. M.Sc. in Computer Science"
        value={degree}
        onChange={onChangeDegree}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function UniversityInput({ university, onChangeUniversity }) {
  return (
    <InputElem label="University" labelFor="university">
      <input
        type="text"
        name="university"
        id="university"
        placeholder="e.g. Oxford University"
        value={university}
        onChange={onChangeUniversity}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function EduStartDate({ eduStartDate, onChangeEduStartDate }) {
  return (
    <InputElem label="Start" labelFor="eduStartDate">
      <input
        type="text"
        name="eduStartDate"
        id="eduStartDate"
        placeholder="MM / YYYY"
        value={eduStartDate}
        onChange={onChangeEduStartDate}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function EduEndDate({ eduEndDate, onChangeEduEndDate }) {
  return (
    <InputElem label="End" labelFor="EduEndDate">
      <input
        type="text"
        name="eduEndDate"
        id="eduEndDate"
        placeholder="MM / YYYY"
        value={eduEndDate}
        onChange={onChangeEduEndDate}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function EduInfo({ eduInfo, onChangeEduInfo }) {
  return (
    <InputElem label="Additional Information" labelFor="eduInfo">
      <CharacterLimit text={eduInfo} limit={100}>
        <textarea
          name="eduInfo"
          id="eduInfo"
          rows={5}
          maxLength={100}
          value={eduInfo}
          onChange={onChangeEduInfo}
          className="input-wrapper__input"
        ></textarea>
      </CharacterLimit>
    </InputElem>
  );
}

export default function EcucationForm({ education, onChange }) {
  const { degree, university, eduStartDate, eduEndDate, eduInfo } = education;
  const {
    handleChangeDegree,
    handleChangeUniversity,
    handleChangeEduStartDate,
    handleChangeEduEndDate,
    handleChangeEduInfo,
  } = onChange;

  return (
    <>
      <form action="" method="get" className="cv-edit-panel__form">
        <DegreeInput degree={degree} onChangeDegree={handleChangeDegree} />
        <UniversityInput
          university={university}
          onChangeUniversity={handleChangeUniversity}
        />
        <EduStartDate
          eduStartDate={eduStartDate}
          onChangeEduStartDate={handleChangeEduStartDate}
        />
        <EduEndDate
          eduEndDate={eduEndDate}
          onChangeEduEndDate={handleChangeEduEndDate}
        />
        <EduInfo eduInfo={eduInfo} onChangeEduInfo={handleChangeEduInfo} />
      </form>
      <AddMoreBtn />
    </>
  );
}
