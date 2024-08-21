export const isLeapYear = (year: number) => {
  if (year >= 1582) {
    if (year % 100 === 0) return year % 400 === 0;
    else {
      return year % 4 === 0;
    }
  }
  return false;
};

//60 * 60 * 24 * 365
export const secondsToDate = (elapsedSeconds: number) => {
  const noYears = 60 * 60 * 24;
  //const years = elapsedSeconds - //
};
