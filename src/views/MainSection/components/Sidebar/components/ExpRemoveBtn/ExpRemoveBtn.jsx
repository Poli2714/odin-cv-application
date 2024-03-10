import { useContext } from 'react';

import { RemoveBtn } from 'src/components/buttons';
import { ExperienceContext, KeyContext } from 'src/hooks/Contexts';

function ExpRemoveBtn() {
  const { experiences, setExperiences } = useContext(ExperienceContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);
  const { expActiveKey } = activeKey;

  const handleClickRemoveExp = key => {
    const newExperiences = { ...experiences };
    delete newExperiences[key];
    setExperiences(newExperiences);
    setActiveKey({
      ...activeKey,
      expActiveKey: Object.keys(newExperiences).at(-1),
    });
  };

  return (
    <RemoveBtn
      disabled={Object.keys(experiences).length === 1 || !expActiveKey}
      onClick={() => handleClickRemoveExp(expActiveKey)}
    />
  );
}

export default ExpRemoveBtn;
