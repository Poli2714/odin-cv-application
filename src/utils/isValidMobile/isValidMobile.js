function isValidMobile(mobile) {
  if (mobile.length === 0) return true;
  else if (mobile[0] === '+' && mobile.length >= 12) return true;
  return false;
}

export default isValidMobile;
