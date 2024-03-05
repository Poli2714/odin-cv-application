import { v4 as uuidv4 } from 'uuid';

import ProfilePicIcon from 'src/assets/profile-pic2.svg';

const initialPersonalInfoData = {
  profilePicture: ProfilePicIcon,
  fullName: '',
  currentJobTitle: '',
  email: '',
  mobile: '',
  city: '',
};

const initialSummaryData = '';

const initialExpID = uuidv4();
const initialExpData = {
  [initialExpID]: {
    jobTitle: '',
    employer: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: '',
  },
};

const initialEduID = uuidv4();
const initialEduData = {
  [initialEduID]: {
    degree: '',
    university: '',
    eduStartDate: '',
    eduEndDate: '',
    eduInfo: '',
  },
};

export {
  initialPersonalInfoData,
  initialSummaryData,
  initialExpData,
  initialEduData,
};
