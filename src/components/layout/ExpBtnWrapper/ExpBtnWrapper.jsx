import { BtnWrapper } from '..';
import {
  ExpAddMoreBtn,
  ExpRemoveBtn,
} from 'src/views/MainSection/components/Sidebar/components';

function ExpBtnWrapper() {
  return (
    <BtnWrapper>
      <ExpAddMoreBtn />
      <ExpRemoveBtn />
    </BtnWrapper>
  );
}

export default ExpBtnWrapper;
