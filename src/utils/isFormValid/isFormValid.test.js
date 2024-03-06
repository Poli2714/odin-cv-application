import { describe, it, expect } from 'vitest';

import { isExpFormValid, isEduFormValid } from './isFormValid';

describe('isExpFormValid', () => {
  it('returns true if all required fields are valid', () => {
    expect(
      isExpFormValid({
        jobTitle: 'a',
        employer: 'b',
        jobStartDate: '12 / 2021',
        jobEndDate: '',
      }),
    ).toEqual(true);
    expect(
      isExpFormValid({
        jobTitle: 'test',
        employer: 'test',
        jobStartDate: '02 / 2024',
        jobEndDate: '02 / 2024',
      }),
    ).toEqual(true);
  });

  it('returns false if one of the required fields is invalid', () => {
    expect(
      isExpFormValid({
        jobTitle: '',
        employer: 'test',
        jobStartDate: '01 / 2024',
        jobEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isExpFormValid({
        jobTitle: 'a',
        employer: '',
        jobStartDate: '01 / 2024',
        jobEndDate: '02 / 2024',
      }),
    ).toEqual(false);
    expect(
      isExpFormValid({
        jobTitle: 'hello',
        employer: 'hi',
        jobStartDate: '',
        jobEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isExpFormValid({
        jobTitle: 'test',
        employer: 'test',
        jobStartDate: '01 / 202',
        jobEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isExpFormValid({
        jobTitle: 'test',
        employer: 'test',
        jobStartDate: '12 / 2023',
        jobEndDate: '02 / 202',
      }),
    ).toEqual(false);
  });

  it('returns false if all required fields are invalid', () => {
    expect(
      isExpFormValid({
        jobTitle: '',
        employer: '',
        jobStartDate: '',
        jobEndDate: '',
      }),
    ).toEqual(false);
  });

  it("returns false if jobTitle or employer's value is a whitespace character", () => {
    expect(
      isExpFormValid({
        jobTitle: ' ',
        employer: 'test',
        jobStartDate: '01 / 2024',
        jobEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isExpFormValid({
        jobTitle: 'test',
        employer: ' ',
        jobStartDate: '01 / 2024',
        jobEndDate: '02 / 2024',
      }),
    ).toEqual(false);
  });

  it('returns true if all required fields are valid and an optional field is present', () => {
    expect(
      isExpFormValid({
        jobTitle: 'test',
        employer: 'test',
        jobStartDate: '01 / 2024',
        jobEndDate: '',
        jobDescription: 'test',
      }),
    ).toEqual(true);
  });
});

// Testing isEduFormValid
describe('isEduFormValid', () => {
  it('returns true if all required fields are valid', () => {
    expect(
      isEduFormValid({
        degree: 'test',
        university: 'test',
        eduStartDate: '01 / 2009',
        eduEndDate: '',
      }),
    ).toEqual(true);
    expect(
      isEduFormValid({
        degree: 'a',
        university: 'b',
        eduStartDate: '09 / 2013',
        eduEndDate: '06 / 2017',
      }),
    ).toEqual(true);
  });

  it('returns true if all required fields are valid and an optional field is present', () => {
    expect(
      isEduFormValid({
        degree: 'IR',
        university: 'Harvard',
        eduStartDate: '09 / 2005',
        eduEndDate: '06 / 2009',
        eduInfo: 'test',
      }),
    ).toEqual(true);
  });

  it('returns false if one of the required fields is invalid', () => {
    expect(
      isEduFormValid({
        degree: '',
        university: 'test',
        eduStartDate: '08 / 2020',
        eduEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isEduFormValid({
        degree: 'test',
        university: '',
        eduStartDate: '03 / 2021',
        eduEndDate: '09 / 2023',
      }),
    ).toEqual(false);
    expect(
      isEduFormValid({
        degree: 'test',
        university: 'testtt',
        eduStartDate: '',
        eduEndDate: '',
      }),
    ).toEqual(false);
    expect(
      isEduFormValid({
        degree: 'hello',
        university: 'hii',
        eduStartDate: '08 / 20',
        eduEndDate: '',
      }),
    ).toEqual(false);
  });

  it('returns false if all required fields are invalid', () => {
    expect(
      isEduFormValid({
        degree: '',
        university: '',
        eduStartDate: '',
        eduEndDate: '',
      }),
    ).toEqual(false);
  });

  it("returns false if degree or university's value is a whitespace character", () => {
    expect(
      isEduFormValid({
        degree: ' ',
        university: 'test',
        eduStartDate: '07 / 1999',
        eduEndDate: '06 / 2007',
      }),
    ).toEqual(false);
    expect(
      isEduFormValid({
        degree: 'test',
        university: ' ',
        eduStartDate: '02 / 2000',
        eduEndDate: '',
      }),
    ).toEqual(false);
  });
});
