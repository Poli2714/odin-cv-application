import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';

function FullName() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { fullName } = personalInfo;

  const handleChange = e =>
    setPersonalInfo({
      ...personalInfo,
      fullName: e.target.value,
    });

  return (
    <InputWrapper>
      <Label labelName="Full name" labelFor="name" />
      <TextInput
        autofocus={true}
        name="name"
        placeholder="James Owen"
        value={fullName}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}

export default FullName;
