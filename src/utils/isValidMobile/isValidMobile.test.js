import { expect, test } from 'vitest';

import isValidMobile from './isValidMobile';

test('returns true if a user has not provided any value', () => {
  expect(isValidMobile('')).toBeTruthy();
});

test('returns true if a user input starts with a plus sign and is longer than or equal to 12 characters', () => {
  expect(isValidMobile('+12345678901')).toBeTruthy();
  expect(isValidMobile('+1234567890123456')).toBeTruthy();
});

test('returns false if a user input does not start with aplus sign or is less than 12 characters', () => {
  expect(isValidMobile('+')).toBeFalsy();
  expect(isValidMobile('+123')).toBeFalsy();
  expect(isValidMobile('+1234567890')).toBeFalsy();
});
