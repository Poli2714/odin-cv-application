import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { formatDateInput, isValidEndDate } from 'src/utils';
import { EducationContext } from 'src/hooks/Contexts';

function EduEndDate({ id }) {
  const { educations, setEducations } = useContext(EducationContext);
  const { eduEndDate, eduStartDate } = educations[id];

  const handleChangeEduEndDate = e => {
    if (!isValidEndDate(eduStartDate, e.target.value)) return;

    const formattedDate = formatDateInput(e.target.value, eduEndDate);
    if (formattedDate === eduEndDate) return;

    setEducations({
      ...educations,
      [id]: {
        ...educations[id],
        eduEndDate: formattedDate,
      },
    });
  };

  return (
    <InputWrapper>
      <Label labelName="End" labelFor="eduEndDate" />
      <TextInput
        disabled={eduStartDate.length < 9}
        name="eduEndDate"
        onChange={handleChangeEduEndDate}
        placeholder="MM / YYYY"
        value={eduEndDate}
      />
    </InputWrapper>
  );
}

EduEndDate.propTypes = {
  id: PropTypes.string,
};

export default EduEndDate;
