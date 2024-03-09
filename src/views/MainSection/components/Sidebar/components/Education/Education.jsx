import { useContext } from 'react';

import {
  Degree,
  EduEndDate,
  EduInfo,
  EduStartDate,
  University,
} from './components';
import { DateInputsWrapper, FormWrapper } from 'src/components/layout';
import { Form } from 'src/components/forms';
import { Group } from 'src/components/ui';
import { EducationContext, KeyContext } from 'src/hooks/Contexts';

function Education() {
  const { educations } = useContext(EducationContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);
  const { eduActiveKey } = activeKey;

  const handleClickEduGroup = (key, currentKey) =>
    currentKey !== key
      ? setActiveKey({ ...activeKey, eduActiveKey: key })
      : setActiveKey({
          ...activeKey,
          eduActiveKey: null,
        });

  const renderForm = key => (
    <Form key={key} isActive={eduActiveKey === key}>
      <Degree id={key} />
      <University id={key} />
      <DateInputsWrapper>
        <EduStartDate id={key} />
        <EduEndDate id={key} />
      </DateInputsWrapper>
      <EduInfo id={key} />
    </Form>
  );

  return (
    <>
      {Object.keys(educations).length === 1
        ? renderForm(Object.keys(educations)[0])
        : Object.keys(educations).map((key, i) => (
            <FormWrapper key={key}>
              <Group
                isActive={key !== eduActiveKey}
                label={`Education #${i + 1}`}
                onClick={() => handleClickEduGroup(key, eduActiveKey)}
              />
              {eduActiveKey === key && renderForm(key)}
            </FormWrapper>
          ))}
    </>
  );
}

export default Education;
