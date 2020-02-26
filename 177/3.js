/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
  const findDiv = (t) => {
    const sq = Math.floor(Math.sqrt(t));
    for (let i = sq; i > 0; i--) {
      let a = t / i;
      if (Number.isInteger(a)) {
        return [i, a];
      }
    }
  }

  const [i, a] = findDiv(num + 1);
  const [i2, a2] = findDiv(num + 2);
  if (a - i < a2 - i2) {
    return [i, a];
  } else {
    return [i2, a2];
  }

};