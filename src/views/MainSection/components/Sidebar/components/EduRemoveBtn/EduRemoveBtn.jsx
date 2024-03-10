import { useContext } from 'react';

import { RemoveBtn } from 'src/components/buttons';
import { EducationContext, KeyContext } from 'src/hooks/Contexts';

function EduRemoveBtn() {
  const { educations, setEducations } = useContext(EducationContext);
  const { activeKey, setActiveKey } = useContext(KeyContext);

  const handleClickRemoveEdu = key => {
    const newEducations = { ...educations };
    delete newEducations[key];
    setEducations(newEducations);
    setActiveKey({
      ...activeKey,
      eduActiveKey: Object.keys(newEducations).at(-1),
    });
  };

  return (
    <RemoveBtn
      disabled={Object.keys(educations).length === 1 || !activeKey.eduActiveKey}
      onClick={() => handleClickRemoveEdu(activeKey.eduActiveKey)}
    />
  );
}

export default EduRemoveBtn;
