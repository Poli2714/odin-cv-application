import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { formatDateInput, isValidEndDate } from 'src/utils';
import { ExperienceContext } from 'src/hooks/Contexts';

function JobEndDate({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { jobEndDate, jobStartDate } = experiences[id];

  const handleChangeJobEndDate = e => {
    if (!isValidEndDate(jobStartDate, e.target.value)) return;

    const formattedDate = formatDateInput(e.target.value, jobEndDate);
    if (formattedDate === jobEndDate) return;

    setExperiences({
      ...experiences,
      [id]: {
        ...experiences[id],
        jobEndDate: formattedDate,
      },
    });
  };

  return (
    <InputWrapper>
      <Label labelName="End" labelFor="jobEndDate" />
      <TextInput
        disabled={jobStartDate.length < 9}
        name="jobEndDate"
        onChange={handleChangeJobEndDate}
        placeholder="MM / YYYY"
        value={jobEndDate}
      />
    </InputWrapper>
  );
}

JobEndDate.propTypes = {
  id: PropTypes.string,
};

export default JobEndDate;
