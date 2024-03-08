import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { ExperienceContext } from 'src/hooks/Contexts';

function Employer({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);

  const handleChangeEmployer = (e, key) =>
    setExperiences({
      ...experiences,
      [key]: { ...experiences[key], employer: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="Employer" labelFor="employer" />
      <TextInput
        name="employer"
        onChange={e => handleChangeEmployer(e, id)}
        placeholder="e.g. Facebook"
        value={experiences[id].employer}
      />
    </InputWrapper>
  );
}

Employer.propTypes = {
  id: PropTypes.string,
};

export default Employer;
