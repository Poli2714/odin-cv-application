import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddMoreBtn } from 'src/components/buttons';
import {
  EducationContext,
  EduErrMsgContext,
  KeyContext,
} from 'src/hooks/Contexts';
import { isEduFormValid } from 'src/utils';

function EduAddMoreBtn() {
  const { educations, setEducations } = useContext(EducationContext);
  const { setShowEduErrMessage } = useContext(EduErrMsgContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);

  const handleClickAddEdu = () => {
    const lastKey = Object.keys(educations).at(-1);
    if (isEduFormValid(educations[lastKey])) {
      const newEduID = uuidv4();
      setEducations({
        ...educations,
        [newEduID]: {
          degree: '',
          university: '',
          eduStartDate: '',
          eduEndDate: '',
          eduInfo: '',
        },
      });
      setActiveKey({ ...activeKey, eduActiveKey: newEduID });
      setShowEduErrMessage(false);
    } else {
      activeKey.eduActiveKey !== lastKey &&
        setActiveKey({ ...activeKey, eduActiveKey: lastKey });
      setShowEduErrMessage(true);
    }
  };

  return <AddMoreBtn onClick={handleClickAddEdu} />;
}

export default EduAddMoreBtn;
