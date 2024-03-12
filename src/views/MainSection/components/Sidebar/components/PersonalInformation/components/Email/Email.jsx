import { useContext } from 'react';
import isEmail from 'validator/lib/isEmail';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './Email.module.css';

function Email() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { email } = personalInfo;

  const handleChange = e => {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  };

  return (
    <InputWrapper>
      <Label labelName="Email address" labelFor="email" />
      <TextInput
        id="email"
        clName={styles.emailInput}
        onChange={handleChange}
        pattern="^[a-zA-Z]+((-_\.)[a-zA-Z0-9]+)*[a-zA-Z0-9]*@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,3})?$"
        placeholder="test@example.com"
        value={email}
      />
      {email.length > 0 && !isEmail(email) && (
        <div data-testid="warning" className={styles.invalid}></div>
      )}
    </InputWrapper>
  );
}

export default Email;
