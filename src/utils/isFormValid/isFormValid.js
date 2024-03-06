const isExpFormValid = expForm => {
  return Object.keys(expForm).every(prop => {
    if (prop === 'jobTitle' || prop === 'employer')
      return expForm[prop].length > 0 && expForm[prop] !== ' ';
    else if (prop === 'jobStartDate') return expForm[prop].length === 9;
    else if (prop === 'jobEndDate')
      return expForm[prop].length === 0 || expForm[prop].length === 9;
    else return true;
  });
};

const isEduFormValid = eduForm => {
  return Object.keys(eduForm).every(prop => {
    if (prop === 'degree' || prop === 'university')
      return eduForm[prop].length > 0 && eduForm[prop] !== ' ';
    else if (prop === 'eduStartDate') return eduForm[prop].length === 9;
    else if (prop === 'eduEndDate')
      return eduForm[prop].length === 0 || eduForm[prop].length === 9;
    else return true;
  });
};

export { isExpFormValid, isEduFormValid };
