import { useContext } from 'react';

import { CharacterLimit } from 'src/components/ui';
import { Form, Label, TextArea } from 'src/components/forms';
import { InputWrapper } from 'src/components/layout';
import { SummaryContext } from 'src/hooks/Contexts';

const limit = 200;
const rows = 10;

function Summary() {
  const { summary, setSummary } = useContext(SummaryContext);
  const handleChange = e => setSummary(e.target.value);

  return (
    <Form>
      <InputWrapper>
        <Label labelName="Short summary" labelFor="summary" />
        <CharacterLimit value={summary} limit={limit}>
          <TextArea
            autofocus={true}
            name="summary"
            placeholder="Your professional summary"
            rows={rows}
            maxLength={limit}
            value={summary}
            onChange={handleChange}
          />
        </CharacterLimit>
      </InputWrapper>
    </Form>
  );
}

export default Summary;
