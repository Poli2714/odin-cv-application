import AddMoreBtn from './AddMoreBtn';
import InputElem from './InputElem';
import Textarea from './TextArea';

export default function ExperienceForm() {
  return (
    <>
      <form action="" method="get" className="cv-edit-panel__form">
        <InputElem
          label="Job title"
          labelFor="jobTitle"
          type="text"
          placeholder="e.g. React developer"
        />
        <InputElem
          label="Employer"
          labelFor="employer"
          type="text"
          placeholder="e.g. Facebook"
        />
        <div className="dates">
          <InputElem
            label="Start"
            labelFor="startDate"
            type="text"
            placeholder="MM / YYYY"
          />
          <InputElem
            label="End"
            labelFor="endDate"
            type="text"
            placeholder="MM / YYYY"
          />
        </div>
        <Textarea
          label="Job description"
          labelFor="jobDescription"
          placeholder="Write your job description"
          rows={10}
        />
      </form>
      <AddMoreBtn />
    </>
  );
}
