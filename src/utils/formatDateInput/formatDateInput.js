const isValidMonth = month => {
  if (Number(month[0]) > 1) return false;
  if (month === '00' || Number(month) < 0 || Number(month) > 12) return false;

  return true;
};

const isValidYear = year => {
  if (year.length === 1 && (Number(year) > 2 || Number(year) < 1)) return false;
  if (year.length === 2 && (Number(year) > 20 || Number(year) < 19))
    return false;
  if (year.length === 3 && Number(year) > 202) return false;

  const currentYear = new Date().getFullYear();
  if (Number(year) > currentYear) return false;

  return true;
};

const isValidDate = date => {
  const currentDate = new Date();

  if (date.length > 0 && date.length <= 2)
    return isValidMonth(date.slice(0, 2));
  if (
    date.length === 6 &&
    Number(date.slice(2)) === currentDate.getFullYear() &&
    Number(date.slice(0, 2)) > currentDate.getMonth() + 1
  )
    return false;
  if (date.length > 2) return isValidYear(date.slice(2));
  if (date.length > 6) return false;

  return true;
};

const formatDateInput = function (date, oldDate) {
  let newDate = date.replace(/\D/g, '');
  if (!isValidDate(newDate)) return oldDate;

  if (newDate.length > 2)
    newDate = `${newDate.slice(0, 2)} / ${newDate.slice(2)}`;
  else if (newDate.length === 2 && oldDate.length < 2) newDate += ' / ';
  else if (oldDate.length === 5 && newDate.length < oldDate.length)
    newDate = newDate.slice(0, 1);

  return newDate;
};

export { isValidMonth, isValidYear, isValidDate, formatDateInput };
