var daysBetweenDates = function (date1str, date2str) {
  const strToDs = (str) => str.split('-').map((a) => +a);
  const date1 = strToDs(date1str);
  const date2 = strToDs(date2str);
  console.log(JSON.stringify(date1));
  console.log(JSON.stringify(date2));

  const daysOfDate = (date) => {
    const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const sumOfArray = (a) => a.reduce((i, t) => t + i, 0);
    //generate array [0,1,2,3,n-1]
    const arrayOfN = (n) => [...Array(n).keys()];
    const isLeapYear = (y) => ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
    const [year, month, day] = date;

    const pastYear = year - 1;
    const pastMonth = month - 1;
    const daysOfYears = pastYear * 365 + Math.floor(pastYear / 4) - Math.floor(pastYear / 100) + Math.floor(pastYear / 400);
    const daysOfMonths = sumOfArray(arrayOfN(pastMonth).map((m) => daysOfMonth[m])) + ((month > 2 && isLeapYear(year)) ? 1 : 0);
    const days = daysOfYears + daysOfMonths + day;
    console.log(`${JSON.stringify(date)} daysOfYears ${daysOfYears} daysOfMonths ${daysOfMonths} days ${days}`);
    return days;
  };
  const absDays = Math.abs(daysOfDate(date1) - daysOfDate(date2));
  console.log(`Days of ${date1str} and ${date2str} = ${absDays}`);
  return absDays;

};
daysBetweenDates("2019-06-29", "2019-06-30");
daysBetweenDates("2020-01-15", "2019-12-31");