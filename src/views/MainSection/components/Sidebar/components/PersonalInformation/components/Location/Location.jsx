import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './Location.module.css';

function Location() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { city } = personalInfo;

  const handleChange = e => {
    if (e.target.value.startsWith(' ')) return;
    if (e.target.value.length === 2 && e.target.value.endsWith(' ')) return;
    setPersonalInfo({ ...personalInfo, city: e.target.value });
  };

  return (
    <InputWrapper>
      <Label labelName="City" labelFor="location" />
      <TextInput
        clName={styles.location}
        name="location"
        onChange={handleChange}
        pattern="^.{2,}"
        placeholder="Vancouver"
        value={city}
      />
      {city.length > 0 && city.length < 2 && (
        <div data-testid="warning" className={styles.invalid}></div>
      )}
    </InputWrapper>
  );
}

export default Location;
