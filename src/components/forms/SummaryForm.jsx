import Textarea from './TextArea';

export default function SummaryForm() {
  return (
    <form action="" method="get" className="cv-edit-panel__form">
      <Textarea
        label="Short summary"
        labelFor="summary"
        placeholder="Your professional summary"
        rows={10}
      />
    </form>
  );
}
