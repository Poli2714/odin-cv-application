import { createContext } from 'react';

const IndexContext = createContext({
  activeIndex: null,
  setActiveIndex: () => {},
});

const KeyContext = createContext({
  activeKey: {
    eduActiveKey: null,
    expActiveKey: null,
  },
  setActiveKey: () => {},
});

const EduErrMsgContext = createContext({
  showEduErrMessage: false,
  setShowEduErrMessage: () => {},
});

const ExpErrMsgContext = createContext({
  showExpErrMessage: false,
  setShowExpErrMessage: () => {},
});

const PersonalInfoContext = createContext({
  personalInfo: {
    profilePicture: '',
    fullName: '',
    currentJobTitle: '',
    email: '',
    mobile: '',
    city: '',
  },
  setPersonalInfo: () => {},
});

const SummaryContext = createContext({
  summary: '',
  setSummary: () => {},
});

const ExperienceContext = createContext({
  experiences: {
    id: {
      jobTitle: '',
      employer: '',
      jobStartDate: '',
      jobEndDate: '',
      jobDescription: '',
    },
  },
  setExperiences: () => {},
});

const EducationContext = createContext({
  educations: {
    id: {
      degree: '',
      university: '',
      eduStartDate: '',
      eduEndDate: '',
      eduInfo: '',
    },
  },
  setEducations: () => {},
});

export {
  EducationContext,
  EduErrMsgContext,
  ExperienceContext,
  ExpErrMsgContext,
  IndexContext,
  KeyContext,
  PersonalInfoContext,
  SummaryContext,
};
