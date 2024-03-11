import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';

import CVHeader, {
  CVFullName,
  CVCurrentJobTitle,
  ContactWrapper,
  ContactEmail,
  ContactMobile,
  ContactLocation,
  Contacts,
  CVSummary,
} from './CVHeader';
import { PersonalInfoContext, SummaryContext } from 'src/hooks/Contexts';

// CVFullName
describe('CVFullName', () => {
  function MockParentComponent({ personalInfo }) {
    return (
      <PersonalInfoContext.Provider value={{ personalInfo }}>
        <CVFullName />
      </PersonalInfoContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    personalInfo: PropTypes.object,
  };

  it('renders CVFullName with default value if a user has not typed their name', () => {
    render(<MockParentComponent personalInfo={{ fullName: '' }} />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/^james owen$/i);
  });

  it('renders CVFullName with a user provided value', () => {
    render(<MockParentComponent personalInfo={{ fullName: 'Elgun' }} />);

    expect(screen.getByRole('heading').textContent).toMatch(/^elgun$/i);
  });
});

// CVCurrentJobTitle
describe('CVCurrentJobTitle', () => {
  function MockParentComponent({ personalInfo }) {
    return (
      <PersonalInfoContext.Provider value={{ personalInfo }}>
        <CVCurrentJobTitle />
      </PersonalInfoContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    personalInfo: PropTypes.object,
  };

  it('renders CVCurrentJobTitle with default value if a user has not typed their job title', () => {
    render(<MockParentComponent personalInfo={{ currentJobTitle: '' }} />);
    const jobTitle = screen.getByTestId('cv-job-title');

    expect(jobTitle).toBeInTheDocument();
    expect(jobTitle.textContent).toMatch(/^react developer$/i);
  });

  it('renders CVCurrentJobTitle with a user provided value', () => {
    render(
      <MockParentComponent
        personalInfo={{ currentJobTitle: 'Web developer' }}
      />,
    );

    expect(screen.getByTestId('cv-job-title').textContent).toMatch(
      /^web developer$/i,
    );
  });
});

// ContactWrapper
describe('ContactWrapper', () => {
  it('renders ContactWrapper', () => {
    render(<ContactWrapper altText="Test img" icon="test.jpg" />);

    expect(screen.getByTestId('contact-wrapper')).toBeInTheDocument();
  });

  it('renders ContactWrapper with children if provided by a user', () => {
    render(
      <ContactWrapper altText="Test img" icon="/test.jpg">
        <h2>Test heading</h2>
      </ContactWrapper>,
    );

    expect(screen.getByTestId('contact-wrapper')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

// ContactEmail
describe('ContactEmail', () => {
  function MockParentComponent({ personalInfo }) {
    render(
      <PersonalInfoContext.Provider value={{ personalInfo }}>
        <ContactEmail />
      </PersonalInfoContext.Provider>,
    );
  }

  MockParentComponent.propTypes = {
    personalInfo: PropTypes.object,
  };

  it('renders ContactEmail with default value if a user has not typed their email', () => {
    render(<MockParentComponent personalInfo={{ email: '' }} />);
    const email = screen.getByRole('link');

    expect(email).toBeInTheDocument();
    expect(email.textContent).toMatch(/^james.owen@example.com$/i);
  });

  it('renders ContactEmail with a user provided value', () => {
    render(<MockParentComponent personalInfo={{ email: 'elgun@test.com' }} />);

    expect(screen.getByRole('link').textContent).toMatch(/^elgun@test.com$/i);
  });
});

// ContactMobile
describe('ContactMobile', () => {
  function MockParentComponent({ personalInfo }) {
    return (
      <PersonalInfoContext.Provider value={{ personalInfo }}>
        <ContactMobile />
      </PersonalInfoContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    personalInfo: PropTypes.object,
  };

  it('renders ContactMobile with default value if a user has not typed their number', () => {
    render(<MockParentComponent personalInfo={{ mobile: '' }} />);
    const mobile = screen.getByRole('link');

    expect(mobile).toBeInTheDocument();
    expect(mobile.textContent).toMatch(/^\+1234567890$/i);
  });

  it('renders ContactMobile with a user provided value', () => {
    render(<MockParentComponent personalInfo={{ mobile: '+994505436273' }} />);

    expect(screen.getByRole('link').textContent).toMatch(/^\+994505436273$/i);
  });
});

// ContactLocation
describe('ContactLocation', () => {
  function MockParentComponent({ personalInfo }) {
    return (
      <PersonalInfoContext.Provider value={{ personalInfo }}>
        <ContactLocation />
      </PersonalInfoContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    personalInfo: PropTypes.object,
  };

  it('renders ContactLocation with default value if a user has not typed their city', () => {
    render(<MockParentComponent personalInfo={{ city: '' }} />);
    const city = screen.getByTestId('cv-location');

    expect(city).toBeInTheDocument();
    expect(city.textContent).toMatch(/^Vancouver$/i);
  });

  it('renders ContactLocation with a user provided value', () => {
    render(<MockParentComponent personalInfo={{ city: 'Los Angeles' }} />);

    expect(screen.getByTestId('cv-location').textContent).toMatch(
      /^Los Angeles$/i,
    );
  });
});

// Contacts
describe('Contacts', () => {
  it('renders Contacts', () => {
    render(<Contacts />);

    expect(screen.getByTestId('contacts')).toBeInTheDocument();
  });
});

// CVSummary
describe('CVSummary', () => {
  function MockParentComponent({ summary }) {
    return (
      <SummaryContext.Provider value={{ summary }}>
        <CVSummary />
      </SummaryContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    summary: PropTypes.string,
  };

  it('renders CVSummary with default value if a user has not typed their professional summary', () => {
    render(<MockParentComponent summary={''} />);
    const summary = screen.getByTestId('cv-summary');

    expect(summary).toBeInTheDocument();
    expect(summary.textContent).toMatch(/^lorem ipsum/i);
  });

  it('renders CVSummary with a user provided value', () => {
    render(<MockParentComponent summary={'Test summary text'} />);

    expect(screen.getByTestId('cv-summary').textContent).toMatch(
      /^test summary text$/i,
    );
  });
});

// CVHeader
describe('CVHeader', () => {
  const exampleData = { profilePicture: '/src/assets/profile-pic2.svg' };
  const exampleData2 = { profilePicture: 'test.svg' };

  function MockParentComponent({ data }) {
    return (
      <PersonalInfoContext.Provider value={{ personalInfo: data }}>
        <CVHeader />
      </PersonalInfoContext.Provider>
    );
  }

  MockParentComponent.propTypes = {
    data: PropTypes.object,
  };

  it('renders CVHeader', () => {
    render(<CVHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it("doesn't display Photo if profilePicture value is a default value", () => {
    render(<MockParentComponent data={exampleData} />);
    expect(screen.queryByTestId('photo')).not.toBeInTheDocument();
  });

  it('displays Photo if a user uploads a picture and it is not a default profilePicture ', () => {
    render(<MockParentComponent data={exampleData2} />);
    expect(screen.queryByTestId('photo')).toBeInTheDocument();
  });
});
