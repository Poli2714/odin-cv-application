import { useContext } from 'react';

import { InputWrapper } from 'src/components/layout';
import { Label, TextInput } from 'src/components/forms';
import { PersonalInfoContext } from 'src/hooks/Contexts';
import styles from './CurrentJobTitle.module.css';

function CurrentJobTitle() {
  const { personalInfo, setPersonalInfo } = useContext(PersonalInfoContext);
  const { currentJobTitle } = personalInfo;
  const handleChange = e => {
    if (e.target.value.startsWith(' ')) return;
    if (e.target.value.length === 2 && e.target.value.endsWith(' ')) return;
    setPersonalInfo({ ...personalInfo, currentJobTitle: e.target.value });
  };

  return (
    <InputWrapper>
      <Label labelName="Job title" labelFor="jobTitle" />
      <TextInput
        clName={styles.jobTitle}
        name="jobTitle"
        onChange={handleChange}
        pattern="^.{2,}"
        placeholder="React developer"
        value={currentJobTitle}
      />
      {currentJobTitle.length > 0 && currentJobTitle.length < 2 && (
        <div data-testid="warning" className={styles.invalid}></div>
      )}
    </InputWrapper>
  );
}

export default CurrentJobTitle;
