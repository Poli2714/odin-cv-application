import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';

function CurrentJobTitle() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { currentJobTitle } = personalInfo;
  const handleChange = e =>
    setPersonalInfo({ ...personalInfo, currentJobTitle: e.target.value });

  return (
    <InputWrapper>
      <>
        <Label labelName="Job title" labelFor="jobTitle" />
        <TextInput
          name="jobTitle"
          placeholder="React developer"
          value={currentJobTitle}
          onChange={handleChange}
        />
      </>
    </InputWrapper>
  );
}

export default CurrentJobTitle;
