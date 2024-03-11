const convertMonth = month => {
  switch (month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return month;
  }
};

const formatDate = date => {
  if (date.length < 2) return date;
  const dateNumeric = date.replace(/\D/g, '');
  const month = Number(dateNumeric.slice(0, 2));
  if (dateNumeric.length === 2) return convertMonth(month);

  return `${convertMonth(month)} ${dateNumeric.slice(2)}`;
};

const formatCVDates = (startDate, endDate) => {
  if (!startDate.length && !endDate.length) return '';
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  if (formattedStartDate === formattedEndDate) return 'Less than a month';
  if (endDate.length === 0 && startDate.length < 9) return formattedStartDate;
  if (startDate.length === 9 && !endDate.length)
    return `${formattedStartDate} - current`;
  return `${formattedStartDate} - ${formattedEndDate}`;
};

export { convertMonth, formatDate, formatCVDates };
