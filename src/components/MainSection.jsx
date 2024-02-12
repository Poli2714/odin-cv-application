import '../styles/MainSection.css';

import { useState } from 'react';
import SidebarAndCVEditPanel from './SidebarAndCVEditPanel';
import CV from './CV';

export default function MainSection() {
  const [cvForm, setCvForm] = useState({
    personalInfo: {
      fullName: '',
      currentJobTitle: '',
      email: '',
      mobile: '',
      city: '',
    },
    summary: '',
    experience: {
      jobTitle: '',
      employer: '',
      jobStartDate: '',
      jobEndDate: '',
      jobDescription: '',
    },
    education: {
      degree: '',
      university: '',
      eduStartDate: '',
      eduEndDate: '',
      eduInfo: '',
    },
  });

  const handleChange = {
    handleChangeFullName: e =>
      setCvForm({
        ...cvForm,
        personalInfo: { ...cvForm.personalInfo, fullName: e.target.value },
      }),
    handleChangeCurrentJobTitle: e =>
      setCvForm({
        ...cvForm,
        personalInfo: {
          ...cvForm.personalInfo,
          currentJobTitle: e.target.value,
        },
      }),
    handleChangeEmail: e =>
      setCvForm({
        ...cvForm,
        personalInfo: { ...cvForm.personalInfo, email: e.target.value },
      }),
    handleChangeMobile: e =>
      setCvForm({
        ...cvForm,
        personalInfo: { ...cvForm.personalInfo, mobile: e.target.value },
      }),
    handleChangeCity: e =>
      setCvForm({
        ...cvForm,
        personalInfo: { ...cvForm.personalInfo, city: e.target.value },
      }),
    handleChangeSummary: e =>
      setCvForm({
        ...cvForm,
        summary: e.target.value,
      }),
    handleChangeJobTitle: e =>
      setCvForm({
        ...cvForm,
        experience: { ...cvForm.experience, jobTitle: e.target.value },
      }),
    handleChangeEmployer: e =>
      setCvForm({
        ...cvForm,
        experience: { ...cvForm.experience, employer: e.target.value },
      }),
    handleChangeJobStartDate: e =>
      setCvForm({
        ...cvForm,
        experience: { ...cvForm.experience, jobStartDate: e.target.value },
      }),
    handleChangeJobEndDate: e =>
      setCvForm({
        ...cvForm,
        experience: { ...cvForm.experience, jobEndDate: e.target.value },
      }),
    handleChangeJobDescription: e =>
      setCvForm({
        ...cvForm,
        experience: { ...cvForm.experience, jobDescription: e.target.value },
      }),
    handleChangeDegree: e =>
      setCvForm({
        ...cvForm,
        education: { ...cvForm.education, degree: e.target.value },
      }),
    handleChangeUniversity: e =>
      setCvForm({
        ...cvForm,
        education: { ...cvForm.education, university: e.target.value },
      }),
    handleChangeEduStartDate: e =>
      setCvForm({
        ...cvForm,
        education: { ...cvForm.education, eduStartDate: e.target.value },
      }),
    handleChangeEduEndDate: e =>
      setCvForm({
        ...cvForm,
        education: { ...cvForm.education, eduEndDate: e.target.value },
      }),
    handleChangeEduInfo: e =>
      setCvForm({
        ...cvForm,
        education: { ...cvForm.education, eduInfo: e.target.value },
      }),
  };

  return (
    <main className="main-section">
      <SidebarAndCVEditPanel cvForm={cvForm} handleChange={handleChange} />
      <CV cvForm={cvForm} />
    </main>
  );
}
