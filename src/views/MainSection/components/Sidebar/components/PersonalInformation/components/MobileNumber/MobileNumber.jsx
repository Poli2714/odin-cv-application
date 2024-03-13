import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import { isValidMobile } from 'src/utils';
import styles from './MobileNumber.module.css';

function MobileNumber() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { mobile } = personalInfo;

  const handleChange = e =>
    setPersonalInfo({ ...personalInfo, mobile: e.target.value.trim() });

  return (
    <InputWrapper>
      <Label labelName="Mobile number" labelFor="mobile" />
      <input
        className={styles.telInput}
        id="mobile"
        name="mobile"
        onChange={handleChange}
        pattern="^\+[0-9]{11,}"
        placeholder="+12345678910"
        type="tel"
        value={mobile}
      />
      {isValidMobile(mobile) || (
        <div data-testid="warning" className={styles.invalid}></div>
      )}
    </InputWrapper>
  );
}

export default MobileNumber;
