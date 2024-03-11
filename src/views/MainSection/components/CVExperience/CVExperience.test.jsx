import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';

import CVExperience from './CVExperience';
import { ExperienceContext } from 'src/hooks/Contexts';

const expData1 = {
  fakeID1: {
    jobTitle: '',
    employer: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: '',
  },
};
const expData2 = {
  fakeID1: {
    jobTitle: 'test',
    employer: 'test',
    jobStartDate: '01 / 2020',
    jobEndDate: '01 / 2021',
    jobDescription: 'test',
  },
};

const expData3 = {
  fakeID1: {
    jobTitle: 'Test',
    employer: 'Test',
    jobStartDate: '01 / 2020',
    jobEndDate: '01 / 2021',
    jobDescription: 'Test',
  },
  fakeID2: {
    jobTitle: '',
    employer: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: '',
  },
};

const expData4 = {
  fakeID1: {
    jobTitle: 'Test',
    employer: 'Test',
    jobStartDate: '01 / 2020',
    jobEndDate: '',
    jobDescription: '',
  },
  fakeID2: {
    jobTitle: 'Test2',
    employer: 'Test2',
    jobStartDate: '',
    jobEndDate: '',
    jobDescription: '',
  },
};

function MockParentComponent({ data }) {
  return (
    <ExperienceContext.Provider value={{ experiences: data }}>
      <CVExperience />
    </ExperienceContext.Provider>
  );
}

MockParentComponent.propTypes = {
  data: PropTypes.object,
};

test('renders CVExperience', () => {
  render(<CVExperience />);

  expect(screen.getByTestId('cv-section')).toBeInTheDocument();
});

test('renders CVExperience with default values if there is only one experience and a user has not provided any value', () => {
  render(<MockParentComponent data={expData1} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');

  expect(headings[0]).toHaveTextContent('Experience');
  expect(CVSections).toHaveLength(1);
  expect(headings[1]).toHaveTextContent(/^react developer$/i);
  expect(screen.getByTestId('subtitle')).toHaveTextContent(/^facebook$/i);
  expect(screen.getByTestId('date')).toHaveTextContent(
    /^july 2020 - current$/i,
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(
    /^lorem ipsum/i,
  );
});

test('renders CVExperience with user provided values where there is only one experience', () => {
  render(<MockParentComponent data={expData2} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');

  expect(headings[0]).toHaveTextContent('Experience');
  expect(CVSections).toHaveLength(1);
  expect(headings[1]).toHaveTextContent(/^test$/i);
  expect(screen.getByTestId('subtitle')).toHaveTextContent(/^test$/i);
  expect(screen.getByTestId('date')).toHaveTextContent(
    /^January 2020 - January 2021$/i,
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(/^test$/i);
});

test('renders CVExperience with two experiences, one with user provided values, and the second with empty values if the second experience data has not been provided', () => {
  render(<MockParentComponent data={expData3} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');
  const subtitles = screen.getAllByTestId('subtitle');
  const dates = screen.getAllByTestId('date');
  const mainSections = screen.getAllByRole('main');

  expect(headings[0]).toHaveTextContent('Experience');
  expect(CVSections).toHaveLength(2);
  expect(headings[1]).toHaveTextContent(/^test$/i);
  expect(subtitles[0]).toHaveTextContent(/^test$/i);
  expect(dates[0]).toHaveTextContent(/^January 2020 - January 2021$/i);
  expect(mainSections).toHaveLength(1);
  expect(mainSections[0]).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(/^test$/i);

  expect(headings[2]).toHaveTextContent('');
  expect(subtitles[1]).toHaveTextContent('');
  expect(dates[1]).toHaveTextContent('');
});

test('renders CVExperience with two experiences, one with user provided values (but only 3 required fileds out of 5), and the second with user provided values', () => {
  render(<MockParentComponent data={expData4} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');
  const subtitles = screen.getAllByTestId('subtitle');
  const dates = screen.getAllByTestId('date');
  const mainSections = screen.getAllByRole('main');

  expect(headings[0]).toHaveTextContent('Experience');
  expect(CVSections).toHaveLength(2);
  expect(headings[1]).toHaveTextContent(/^test$/i);
  expect(subtitles[0]).toHaveTextContent(/^test$/i);
  expect(dates[0]).toHaveTextContent(/^January 2020 - current$/i);
  expect(mainSections).toHaveLength(1);
  expect(mainSections[0]).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(
    /^lorem ipsum/i,
  );

  expect(headings[2]).toHaveTextContent(/^test2$/i);
  expect(subtitles[1]).toHaveTextContent(/^test2$/i);
  expect(dates[1]).toHaveTextContent('');
});
