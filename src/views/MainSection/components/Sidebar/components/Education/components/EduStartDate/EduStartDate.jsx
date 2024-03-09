import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { formatDateInput } from 'src/utils';
import { EducationContext } from 'src/hooks/Contexts';

function EduStartDate({ id }) {
  const { educations, setEducations } = useContext(EducationContext);
  const { eduStartDate } = educations[id];

  const handleChangeEduStartDate = e => {
    const formattedDate = formatDateInput(e.target.value, eduStartDate);

    setEducations({
      ...educations,
      [id]: {
        ...educations[id],
        eduStartDate: formattedDate,
      },
    });
  };

  return (
    <InputWrapper>
      <Label labelName="Start" labelFor="eduStartDate" />
      <TextInput
        name="eduStartDate"
        placeholder="MM / YYYY"
        value={eduStartDate}
        onChange={handleChangeEduStartDate}
      />
    </InputWrapper>
  );
}

EduStartDate.propTypes = {
  id: PropTypes.string,
};

export default EduStartDate;
