import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CharacterLimit } from 'src/components/ui';
import { InputWrapper } from 'src/components/layout';
import { Label, TextArea } from 'src/components/forms';
import { ExperienceContext } from 'src/hooks/Contexts';

const limit = 200;
const rows = 10;

function JobDescription({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { jobDescription } = experiences[id];

  const handleChangeJobDescription = e =>
    setExperiences({
      ...experiences,
      [id]: { ...experiences[id], jobDescription: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="Job Description" labelFor="jobDescription" />
      <CharacterLimit limit={limit} value={jobDescription}>
        <TextArea
          name="jobDescription"
          placeholder="Write your job description"
          rows={rows}
          maxLength={limit}
          value={jobDescription}
          onChange={handleChangeJobDescription}
        />
      </CharacterLimit>
    </InputWrapper>
  );
}

JobDescription.propTypes = {
  id: PropTypes.string,
};

export default JobDescription;
