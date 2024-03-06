import { describe, it, expect } from 'vitest';

import {
  isValidMonth,
  isValidYear,
  isValidDate,
  formatDateInput,
} from './formatDateInput';

describe('isValidMonth', () => {
  it("return false if value's first number is greater than 1", () => {
    expect(isValidMonth('2')).toBeFalsy();
    expect(isValidMonth('6')).toBeFalsy();
  });

  it('returns false if value is 00', () => {
    expect(isValidMonth('00')).toBeFalsy();
  });

  it('returns false if value is less than 0 or greater than 12', () => {
    expect(isValidMonth('-1')).toBeFalsy();
    expect(isValidMonth('13')).toBeFalsy();
    expect(isValidMonth('19')).toBeFalsy();
  });

  it('correctly validates month', () => {
    expect(isValidMonth('0')).toBeTruthy();
    expect(isValidMonth('12')).toBeTruthy();
    expect(isValidMonth('05')).toBeTruthy();
  });
});

describe('isValidYear', () => {
  it("returns true if year's first number is 1 or 2, otherwise returns false", () => {
    expect(isValidYear('3')).toBeFalsy();
    expect(isValidYear('0')).toBeFalsy();
    expect(isValidYear('1')).toBeTruthy();
    expect(isValidYear('2')).toBeTruthy();
  });

  it("returns false if year's length is 2 and it is not 19 or 20, otherwise returns true", () => {
    expect(isValidYear('21')).toBeFalsy();
    expect(isValidYear('16')).toBeFalsy();
    expect(isValidYear('19')).toBeTruthy();
    expect(isValidYear('20')).toBeTruthy();
  });

  it("returns false if year's length is 3 and it is greater than 202, otherwise returns true", () => {
    expect(isValidDate('203')).toBeFalsy();
    expect(isValidYear('199')).toBeTruthy();
  });

  it('returns false if year is greater than current year', () => {
    expect(isValidYear('2023')).toBeTruthy();
    expect(isValidYear('2025')).toBeFalsy();
    expect(isValidYear('1900')).toBeTruthy();
  });
});

describe('isValidDate', () => {
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth < 12) {
    it("returns false if year is the current year and month hasn't come yet", () => {
      expect(isValidDate(`122024`)).toBeFalsy();
    });
  }

  it("returns false if date's length is greater than 6", () => {
    expect(isValidDate('0720234')).toBeFalsy();
    expect(isValidDate('0120000')).toBeFalsy();
  });

  it('correctly validates date', () => {
    expect(isValidDate('102020')).toBeTruthy();
    expect(isValidDate('0218')).toBeFalsy();
    expect(isValidDate('06206')).toBeFalsy();
  });
});

describe('formatDate', () => {
  it('correctly formats date', () => {
    expect(formatDateInput('02 / 2024', '02 / 202')).toEqual('02 / 2024');
    expect(formatDateInput('12', '1')).toEqual('12 / ');
    expect(formatDateInput('0', '')).toEqual('0');
    expect(formatDateInput('03 /', '03 / ')).toEqual('0');
  });
});
