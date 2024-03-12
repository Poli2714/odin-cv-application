import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './FullName.module.css';

function FullName() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { fullName } = personalInfo;

  const handleChange = e => {
    if (e.target.value.startsWith(' ')) return;
    if (e.target.value.length === 2 && e.target.value.endsWith(' ')) return;
    setPersonalInfo({
      ...personalInfo,
      fullName: e.target.value,
    });
  };

  return (
    <InputWrapper>
      <Label labelName="Full name" labelFor="name" />
      <TextInput
        autofocus={true}
        clName={styles.fullName}
        name="name"
        pattern="^.{2,}"
        placeholder="James Owen"
        value={fullName}
        onChange={handleChange}
      />
      {fullName.length > 0 && fullName.length < 2 && (
        <div data-testid="warning" className={styles.invalid}></div>
      )}
    </InputWrapper>
  );
}

export default FullName;
