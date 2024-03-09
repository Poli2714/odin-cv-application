import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { EducationContext } from 'src/hooks/Contexts';

function Degree({ id }) {
  const { educations, setEducations } = useContext(EducationContext);
  const { degree } = educations[id];

  const handleChangeDegree = e =>
    setEducations({
      ...educations,
      [id]: { ...educations[id], degree: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="Degree" labelFor="degree" />
      <TextInput
        autofocus={true}
        name="degree"
        placeholder="e.g. M.Sc. in Computer Science"
        value={degree}
        onChange={handleChangeDegree}
      />
    </InputWrapper>
  );
}

Degree.propTypes = {
  id: PropTypes.string,
};

export default Degree;
