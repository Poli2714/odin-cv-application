import {
  CurrentJobTitle,
  Email,
  FullName,
  Location,
  MobileNumber,
  UploadPicture,
} from './components';
import { Form } from 'src/components/forms';

function PersonalInformation() {
  return (
    <Form>
      <UploadPicture />
      <FullName />
      <CurrentJobTitle />
      <Email />
      <MobileNumber />
      <Location />
    </Form>
  );
}

export default PersonalInformation;
