import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';

import CVEducation from './CVEducation';
import { EducationContext } from 'src/hooks/Contexts';

const eduData1 = {
  fakeID1: {
    degree: '',
    university: '',
    eduStartDate: '',
    eduEndDate: '',
    eduInfo: '',
  },
};
const eduData2 = {
  fakeID1: {
    degree: 'test',
    university: 'test',
    eduStartDate: '01 / 2020',
    eduEndDate: '01 / 2021',
    eduInfo: 'test',
  },
};

const eduData3 = {
  fakeID1: {
    degree: 'Test',
    university: 'Test',
    eduStartDate: '01 / 2020',
    eduEndDate: '01 / 2021',
    eduInfo: 'Test',
  },
  fakeID2: {
    degree: '',
    university: '',
    eduStartDate: '',
    eduEndDate: '',
    eduInfo: '',
  },
};

const eduData4 = {
  fakeID1: {
    degree: 'Test',
    university: 'Test',
    eduStartDate: '01 / 2020',
    eduEndDate: '',
    eduInfo: '',
  },
  fakeID2: {
    degree: 'Test2',
    university: 'Test2',
    eduStartDate: '',
    eduEndDate: '',
    eduInfo: '',
  },
};

function MockParentComponent({ data }) {
  return (
    <EducationContext.Provider value={{ educations: data }}>
      <CVEducation />
    </EducationContext.Provider>
  );
}

MockParentComponent.propTypes = {
  data: PropTypes.object,
};

test('renders CVEducation', () => {
  render(<CVEducation />);

  expect(screen.getByTestId('cv-section')).toBeInTheDocument();
});

test('renders CVEducation with default values if there is only one education and a user has not provided any value', () => {
  render(<MockParentComponent data={eduData1} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');

  expect(headings[0]).toHaveTextContent('Education');
  expect(CVSections).toHaveLength(1);
  expect(headings[1]).toHaveTextContent(/^m.sc. in computer science$/i);
  expect(screen.getByTestId('subtitle')).toHaveTextContent(
    /^oxford university$/i,
  );
  expect(screen.getByTestId('date')).toHaveTextContent(
    /^september 2017 - may 2019$/i,
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(
    /^lorem ipsum/i,
  );
});

test('renders CVEducation with user provided values where there is only one education', () => {
  render(<MockParentComponent data={eduData2} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');

  expect(headings[0]).toHaveTextContent('Education');
  expect(CVSections).toHaveLength(1);
  expect(headings[1]).toHaveTextContent(/^test$/i);
  expect(screen.getByTestId('subtitle')).toHaveTextContent(/^test$/i);
  expect(screen.getByTestId('date')).toHaveTextContent(
    /^January 2020 - January 2021$/i,
  );
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('cv-description')).toHaveTextContent(/^test$/i);
});

test('renders CVEducation with two educations, one with user provided values, and the second with empty values if the second education data has not been provided', () => {
  render(<MockParentComponent data={eduData3} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');
  const subtitles = screen.getAllByTestId('subtitle');
  const dates = screen.getAllByTestId('date');
  const mainSections = screen.getAllByRole('main');

  expect(headings[0]).toHaveTextContent('Education');
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

test('renders CVEducation with two educations, one with user provided values (but only 3 required fileds out of 5), and the second with user provided values', () => {
  render(<MockParentComponent data={eduData4} />);
  const headings = screen.getAllByRole('heading');
  const CVSections = screen.getAllByTestId('cv-section-part');
  const subtitles = screen.getAllByTestId('subtitle');
  const dates = screen.getAllByTestId('date');
  const mainSections = screen.getAllByRole('main');

  expect(headings[0]).toHaveTextContent('Education');
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
