import AddMoreBtn from './AddMoreBtn';
import InputElem from './InputElem';
import Textarea from './TextArea';

export default function EcucationForm() {
  return (
    <>
      <form action="" method="get" className="cv-edit-panel__form">
        <InputElem
          label="Degree"
          labelFor="degree"
          type="text"
          placeholder="e.g. M.Sc. in Computer Science"
        />
        <InputElem
          label="University"
          labelFor="university"
          type="text"
          placeholder="e.g. Oxford University"
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
        <Textarea label="Additional Information" labelFor="info" rows={5} />
      </form>
      <AddMoreBtn />
    </>
  );
}
