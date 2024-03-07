import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './Email.module.css';

function Email() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { email } = personalInfo;
  const handleChange = e =>
    setPersonalInfo({ ...personalInfo, email: e.target.value });

  return (
    <InputWrapper>
      <Label labelName="Email address" labelFor="email" />
      <input
        className={styles.emailInput}
        id="email"
        name="email"
        onChange={handleChange}
        // pattern={}
        placeholder="test@example.com"
        type="email"
        value={email}
      />
    </InputWrapper>
  );
}

export default Email;
