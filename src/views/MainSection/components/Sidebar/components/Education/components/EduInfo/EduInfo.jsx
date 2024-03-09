import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CharacterLimit } from 'src/components/ui';
import { InputWrapper } from 'src/components/layout';
import { Label, TextArea } from 'src/components/forms';
import { EducationContext } from 'src/hooks/Contexts';

const limit = 100;
const rows = 5;

function EduInfo({ id }) {
  const { educations, setEducations } = useContext(EducationContext);
  const { eduInfo } = educations[id];

  const handleChangeEduInfo = e => {
    if (e.target.value.length > limit) return;
    setEducations({
      ...educations,
      [id]: { ...educations[id], eduInfo: e.target.value },
    });
  };

  return (
    <InputWrapper>
      <Label labelName="Additional Information" labelFor="eduInfo" />
      <CharacterLimit limit={limit} value={eduInfo}>
        <TextArea
          name="eduInfo"
          maxLength={limit}
          rows={rows}
          value={eduInfo}
          onChange={handleChangeEduInfo}
        />
      </CharacterLimit>
    </InputWrapper>
  );
}

EduInfo.propTypes = {
  id: PropTypes.string,
};

export default EduInfo;
