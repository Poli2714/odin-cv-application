import { useContext } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { formatDateInput } from 'src/utils';
import { ExperienceContext } from 'src/hooks/Contexts';

function JobStartDate({ id }) {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { jobStartDate } = experiences[id];

  const currentYear = new Date().getFullYear();
  const pattern = `^(?:0[1-9]|1[0-2]) / (?:19[0-9]{2}|20(?:00|[0-${currentYear - 1900}][0-9]))$`;

  const handleChangeJobStartDate = e => {
    const formattedDate = formatDateInput(e.target.value, jobStartDate);
    if (formattedDate === jobStartDate) return;

    setExperiences({
      ...experiences,
      [id]: {
        ...experiences[id],
        jobStartDate: formattedDate,
      },
    });
  };

  return (
    <InputWrapper>
      <Label labelName="Start" labelFor="jobStartDate" />
      <TextInput
        name="jobStartDate"
        onChange={handleChangeJobStartDate}
        pattern={pattern}
        placeholder="MM / YYYY"
        value={jobStartDate}
      />
    </InputWrapper>
  );
}

JobStartDate.propTypes = {
  id: PropTypes.string,
};

export default JobStartDate;
