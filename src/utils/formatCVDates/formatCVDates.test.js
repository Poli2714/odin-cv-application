import { describe, it, expect } from 'vitest';

import { convertMonth, formatDate, formatCVDates } from './formatCVDates';

describe('convertMonth', () => {
  it('converts month to string value', () => {
    expect(convertMonth(10)).toEqual('October');
    expect(convertMonth(1)).toEqual('January');
    expect(convertMonth(0)).toEqual(0);
  });
});

describe('formatDate', () => {
  it("returns original date if date's length is less than 2", () => {
    expect(formatDate('0')).toEqual('0');
    expect(formatDate('')).toEqual('');
  });

  it("returns a string value of month if date's length is between 2 or 5", () => {
    expect(formatDate('03')).toEqual('March');
    expect(formatDate('05 / ')).toEqual('May');
  });

  it('returns correctly formatted month', () => {
    expect(formatDate('02 / 2024')).toEqual('February 2024');
    expect(formatDate('08 / 1')).toEqual('August 1');
    expect(formatDate('10 / 202')).toEqual('October 202');
  });
});

describe('formatCVDates', () => {
  it('returns empty string if no dates are provided', () => {
    expect(formatCVDates('', '')).toEqual('');
  });

  it('returns different value if provided dates are the same', () => {
    expect(formatCVDates('07 / 2020', '07 / 2020')).toMatch(
      /^less than a month$/i,
    );
    expect(formatCVDates('03 / 2000', '03 / 2000')).toMatch(
      /^less than a month$/i,
    );
  });

  it('returns formatted value of first date (still incomplete) without dash character if the second date is not provided', () => {
    expect(formatCVDates('10 / 198', '')).toEqual('October 198');
    expect(formatCVDates('01 / 2', '')).toEqual('January 2');
  });

  it('returns formatted value of first date (completed) with " - current" if the second date is not provided', () => {
    expect(formatCVDates('04 / 1965', '')).toEqual('April 1965 - current');
    expect(formatCVDates('07 / 2017', '')).toEqual('July 2017 - current');
  });

  it('returns correct formatted value of provided dates', () => {
    expect(formatCVDates('04 / 1999', '03 / 2020')).toEqual(
      'April 1999 - March 2020',
    );
    expect(formatCVDates('09 / 2020', '04')).toEqual('September 2020 - April');
    expect(formatCVDates('08 / 1900', '05 / 200')).toEqual(
      'August 1900 - May 200',
    );
    expect(formatCVDates('02 / 2005', '07 / 2009')).toEqual(
      'February 2005 - July 2009',
    );
  });
});
