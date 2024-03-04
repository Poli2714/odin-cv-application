import { BtnWrapper } from '..';
import {
  EduAddMoreBtn,
  EduRemoveBtn,
} from 'src/views/MainSection/components/Sidebar/components';

function EduBtnWrapper() {
  return (
    <BtnWrapper>
      <EduAddMoreBtn />
      <EduRemoveBtn />
    </BtnWrapper>
  );
}

export default EduBtnWrapper;
