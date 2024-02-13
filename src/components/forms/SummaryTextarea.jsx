import CharacterLimit from './CharacterLimit';
import InputElem from './InputElem';

export default function SummaryTextarea({ summary, onChangeSummary }) {
  return (
    <form action="" method="get" className="cv-edit-panel__form">
      <InputElem label="Short summary" labelFor="summary">
        <CharacterLimit text={summary} limit={200}>
          <textarea
            id="summary"
            name="summary"
            placeholder="Your professional summary"
            rows={10}
            maxLength={200}
            value={summary}
            onChange={onChangeSummary}
            className="input-wrapper__input"
          ></textarea>
        </CharacterLimit>
      </InputElem>
    </form>
  );
}
