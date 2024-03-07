import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './MobileNumber.module.css';

function MobileNumber() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { mobile } = personalInfo;

  const handleChange = e =>
    setPersonalInfo({ ...personalInfo, mobile: e.target.value });

  return (
    <InputWrapper>
      <Label labelName="Mobile number" labelFor="mobile" />
      <input
        className={styles.telInput}
        id="mobile"
        name="mobile"
        onChange={handleChange}
        // pattern={}
        placeholder="+12345678910"
        type="tel"
        value={mobile}
      />
    </InputWrapper>
  );
}

export default MobileNumber;
