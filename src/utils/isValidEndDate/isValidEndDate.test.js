import { test, expect } from 'vitest';

import { isValidEndDate } from './isValidEndDate';

test('returns false if end year is less than start year', () => {
  expect(isValidEndDate('11 / 2023', '05 / 1')).toBeFalsy();
  expect(isValidEndDate('10 / 1989', '06 / 18')).toBeFalsy();
  expect(isValidEndDate('02 / 1999', '09 / 198')).toBeFalsy();
  expect(isValidEndDate('07 / 2017', '01 / 2016')).toBeFalsy();
});

test('returns false if end month is less than start month', () => {
  expect(isValidEndDate('05 / 1994', '03 / 1994')).toBeFalsy();
  expect(isValidEndDate('07 / 2020', '04 / 2020')).toBeFalsy();
});

test('correctly validates end date', () => {
  expect(isValidEndDate('10 / 2020', '12 / 2022')).toBeTruthy();
  expect(isValidEndDate('12 / 2021', '02 / 2023')).toBeTruthy();
});
