import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { ExperienceContext } from 'src/hooks/Contexts';

function Employer({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { employer } = experiences[id];

  const handleChangeEmployer = e =>
    setExperiences({
      ...experiences,
      [id]: { ...experiences[id], employer: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="Employer" labelFor="employer" />
      <TextInput
        name="employer"
        onChange={handleChangeEmployer}
        placeholder="e.g. Facebook"
        value={employer}
      />
    </InputWrapper>
  );
}

Employer.propTypes = {
  id: PropTypes.string,
};

export default Employer;
