import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';

function Location() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { city } = personalInfo;

  const handleChange = e =>
    setPersonalInfo({ ...personalInfo, city: e.target.value });

  return (
    <InputWrapper>
      <Label labelName="City" labelFor="location" />
      <TextInput
        name="location"
        placeholder="Vancouver"
        value={city}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}

export default Location;
