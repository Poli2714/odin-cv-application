import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { ExperienceContext } from 'src/hooks/Contexts';

function JobTitle({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);

  const handleChangeJobTitle = (e, key) =>
    setExperiences({
      ...experiences,
      [key]: { ...experiences[key], jobTitle: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="Job Title" labelFor="jobTitle" />
      <TextInput
        autofocus={true}
        name="jobTitle"
        onChange={e => handleChangeJobTitle(e, id)}
        pattern="^\w+"
        placeholder="e.g. React developer"
        value={experiences[id].jobTitle}
      />
    </InputWrapper>
  );
}

JobTitle.propTypes = {
  id: PropTypes.string,
};

export default JobTitle;
