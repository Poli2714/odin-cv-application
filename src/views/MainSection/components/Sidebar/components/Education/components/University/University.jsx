import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { EducationContext } from 'src/hooks/Contexts';

function University({ id }) {
  const { educations, setEducations } = useContext(EducationContext);
  const { university } = educations[id];

  const handleChangeUniversity = e =>
    setEducations({
      ...educations,
      [id]: { ...educations[id], university: e.target.value },
    });

  return (
    <InputWrapper>
      <Label labelName="University" labelFor="university" />
      <TextInput
        name="university"
        placeholder="e.g. Oxford University"
        value={university}
        onChange={handleChangeUniversity}
      />
    </InputWrapper>
  );
}

University.propTypes = {
  id: PropTypes.string,
};

export default University;
