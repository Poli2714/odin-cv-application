import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddMoreBtn } from 'src/components/buttons';
import { isExpFormValid } from 'src/utils';
import {
  ExperienceContext,
  ExpErrMsgContext,
  KeyContext,
} from 'src/hooks/Contexts';

function ExpAddMoreBtn() {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { setShowExpErrMessage } = useContext(ExpErrMsgContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);
  const { expActiveKey } = activeKey;

  const handleClickAddExp = () => {
    const lastKey = Object.keys(experiences).at(-1);
    if (isExpFormValid(experiences[lastKey])) {
      const newExpID = uuidv4();
      setExperiences({
        ...experiences,
        [newExpID]: {
          jobTitle: '',
          employer: '',
          jobStartDate: '',
          jobEndDate: '',
          jobDescription: '',
        },
      });
      setActiveKey({ ...activeKey, expActiveKey: newExpID });
      setShowExpErrMessage(false);
    } else {
      expActiveKey !== lastKey &&
        setActiveKey({ ...activeKey, expActiveKey: lastKey });
      setShowExpErrMessage(true);
    }
  };

  return <AddMoreBtn onClick={handleClickAddExp} />;
}

export default ExpAddMoreBtn;
