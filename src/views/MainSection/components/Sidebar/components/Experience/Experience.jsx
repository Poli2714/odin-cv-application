import { useContext } from 'react';

import {
  Employer,
  JobDescription,
  JobEndDate,
  JobStartDate,
  JobTitle,
} from './components';
import { DateInputsWrapper, FormWrapper } from 'src/components/layout';
import { Form } from 'src/components/forms';
import { Group } from 'src/components/ui';
import { ExperienceContext, KeyContext } from 'src/hooks/Contexts';

function Experience() {
  const { experiences } = useContext(ExperienceContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);
  const { expActiveKey } = activeKey;

  const handleClickExpGroup = (key, currentKey) =>
    currentKey !== key
      ? setActiveKey({ ...activeKey, expActiveKey: key })
      : setActiveKey({
          ...activeKey,
          expActiveKey: null,
        });

  const renderForm = key => {
    return (
      <Form key={key} isActive={expActiveKey === key}>
        <JobTitle id={key} />
        <Employer id={key} />
        <DateInputsWrapper>
          <JobStartDate id={key} />
          <JobEndDate id={key} />
        </DateInputsWrapper>
        <JobDescription id={key} />
      </Form>
    );
  };

  return (
    <>
      {Object.keys(experiences).length === 1
        ? renderForm(Object.keys(experiences)[0])
        : Object.keys(experiences).map((key, i) => (
            <FormWrapper key={key}>
              <Group
                isActive={key !== expActiveKey}
                label={`Experience #${i + 1}`}
                onClick={() => handleClickExpGroup(key, expActiveKey)}
              />
              {expActiveKey === key && renderForm(key)}
            </FormWrapper>
          ))}
    </>
  );
}

export default Experience;
