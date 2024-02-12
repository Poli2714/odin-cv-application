import '../styles/CV.css';

import CvPersonalInfo from './cv/CvPersonalInfo';
import CvSection from './cv/CvSection';

function CvSummary({ summary }) {
  return (
    <section>
      <p className="cv__summary__text">{summary}</p>
    </section>
  );
}

function CvHeader({ personalInfo, summary }) {
  return (
    <header className="cv__header">
      <CvPersonalInfo personalInfo={personalInfo} />
      <CvSummary summary={summary} />
    </header>
  );
}

function CvExperience({ experience }) {
  const { jobTitle, employer, jobStartDate, jobEndDate, jobDescription } =
    experience;
  return (
    <CvSection
      sectionTitle="Experience"
      partTitle={jobTitle}
      subtitle={employer}
      startDate={jobStartDate}
      endDate={jobEndDate}
    >
      <main>
        <p className="cv-section-part-body__text">{jobDescription}</p>
      </main>
    </CvSection>
  );
}

function CvEducation({ education }) {
  const { degree, university, eduStartDate, eduEndDate, eduInfo } = education;

  return (
    <CvSection
      sectionTitle="Education"
      partTitle={degree}
      subtitle={university}
      startDate={eduStartDate}
      endDate={eduEndDate}
    >
      {eduInfo ? (
        <main>
          <p className="cv-section-part-body__text">{eduInfo}</p>
        </main>
      ) : null}
    </CvSection>
  );
}

function CvBody({ experience, education }) {
  return (
    <main className="cv__body">
      <CvExperience experience={experience} />
      <CvEducation education={education} />
    </main>
  );
}

export default function CV({ cvForm }) {
  const { personalInfo, summary, experience, education } = cvForm;
  return (
    <section className="cv-wrapper">
      <div className="cv">
        <CvHeader personalInfo={personalInfo} summary={summary} />
        <CvBody experience={experience} education={education} />
      </div>
    </section>
  );
}
