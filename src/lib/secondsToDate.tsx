import dayjs from "dayjs";

export const isLeapYear = (year: number) => {
  if (year >= 1582) {
    if (year % 100 === 0) return year % 400 === 0;
    else {
      return year % 4 === 0;
    }
  }
  return false;
};

/** From https://stackoverflow.com/a/64695744 */
export const getDate = (date: string) => {
  const now = dayjs();
  const birth = dayjs(date);
  const years = now.diff(birth, "year");
  const months = now.diff(birth, "month") - years * 12;
  const days = now.diff(birth.add(years, "year").add(months, "month"), "day");

  return {
    years,
    months,
    days,
  };
};

export const getDateApprox = (date: string) => {
  // No leap years nor precise months

  const elapsedMs = Date.now() - new Date(`${date}`).getTime();

  const elapsedSeconds = Math.round(elapsedMs / 1000);

  const yearsRem = elapsedSeconds % (60 * 60 * 24 * 365);
  const years = (elapsedSeconds - yearsRem) / (60 * 60 * 24 * 365);

  const monthsRem = yearsRem % (60 * 60 * 24 * 31);
  const months = (yearsRem - monthsRem) / (60 * 60 * 24 * 31);

  const daysRem = monthsRem % (60 * 60 * 24);
  const days = (monthsRem - daysRem) / (60 * 60 * 24);

  return { years, months, days };
};
