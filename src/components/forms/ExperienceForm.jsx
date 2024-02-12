import AddMoreBtn from './AddMoreBtn';
import InputElem from './InputElem';

export function JobTitleInput({ jobTitle, onChangeJobTitle }) {
  return (
    <InputElem label="Job title" labelFor="jobTitle">
      <input
        type="text"
        name="jobTitle"
        id="jobTitle"
        placeholder="e.g. React developer"
        value={jobTitle}
        onChange={onChangeJobTitle}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function EmployerInput({ employer, onChangeEmployer }) {
  return (
    <InputElem label="Employer" labelFor="employer">
      <input
        type="text"
        name="employer"
        id="employer"
        placeholder="e.g. Facebook"
        value={employer}
        onChange={onChangeEmployer}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function JobStartDateInput({ jobStartDate, onChangeJobStartDate }) {
  return (
    <InputElem label="Start" labelFor="startDate">
      <input
        type="text"
        name="startDate"
        id="startDate"
        placeholder="MM / YYYY"
        value={jobStartDate}
        onChange={onChangeJobStartDate}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function JobEndDateInput({ jobEndDate, onChangeJobEndDate }) {
  return (
    <InputElem label="End" labelFor="endDate">
      <input
        type="text"
        name="endDate"
        id="endDate"
        placeholder="MM / YYYY"
        value={jobEndDate}
        onChange={onChangeJobEndDate}
        className="input-wrapper__input"
      />
    </InputElem>
  );
}

export function JobDescriptionInput({
  jobDescription,
  onChangeJobDescription,
}) {
  return (
    <InputElem label="Job description" labelFor="jobDescription">
      <textarea
        name="jobDescription"
        id="jobDescription"
        placeholder="Write your job description"
        rows={10}
        value={jobDescription}
        onChange={onChangeJobDescription}
        className="input-wrapper__input"
      ></textarea>
    </InputElem>
  );
}

export default function ExperienceForm({ experience, onChange }) {
  const { jobTitle, employer, jobStartDate, jobEndDate, jobDescription } =
    experience;
  const {
    handleChangeJobTitle,
    handleChangeEmployer,
    handleChangeJobStartDate,
    handleChangeJobEndDate,
    handleChangeJobDescription,
  } = onChange;
  return (
    <>
      <form action="" method="get" className="cv-edit-panel__form">
        <JobTitleInput
          jobTitle={jobTitle}
          onChangeJobTitle={handleChangeJobTitle}
        />
        <EmployerInput
          employer={employer}
          onChangeEmployer={handleChangeEmployer}
        />
        <JobStartDateInput
          jobStartDate={jobStartDate}
          onChangeJobStartDate={handleChangeJobStartDate}
        />
        <JobEndDateInput
          jobEndDate={jobEndDate}
          onChangeJobEndDate={handleChangeJobEndDate}
        />
        <JobDescriptionInput
          jobDescription={jobDescription}
          onChangeJobDescription={handleChangeJobDescription}
        />
      </form>
      <AddMoreBtn />
    </>
  );
}
