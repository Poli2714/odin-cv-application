const isValidEndDate = (startDate, endDate) => {
  const start = startDate.replace(/\D/g, '');
  const end = endDate.replace(/\D/g, '');

  const startMonth = start.slice(0, 2);
  const startYear = start.slice(2);
  const endMonth = end.slice(0, 2);
  const endYear = end.slice(2);

  if (endYear[0] && Number(startYear[0]) > Number(endYear[0])) return false;
  if (
    endYear.length >= 2 &&
    Number(startYear.slice(0, 2)) > Number(endYear.slice(0, 2))
  )
    return false;
  if (
    endYear.length >= 3 &&
    Number(startYear.slice(0, 3)) > endYear.slice(0, 3)
  )
    return false;
  if (endYear.length === 4 && Number(startYear) > Number(endYear)) return false;
  if (
    Number(startYear) === Number(endYear) &&
    Number(startMonth) > Number(endMonth)
  )
    return false;

  return true;
};

export { isValidEndDate };
