function profitMax(time) {

  let profit = 0;

  const pub = 4;
  const theatre = 5;
  const commercial = 10;
  const timeUnit = [4, 5, 10];

  const pubEarning = 1000;
  const theatreEarning = 1500;
  const commercialParkEarning = 1500;

  let totalEarnings = [];

  if (time <= pub) {
    return 0;
  } else {
    let temp = time - pub;
    totalEarnings[0] = temp * pubEarning;
    if (time >= theatre) {
      temp = time - theatre;
      totalEarnings[1] = temp * theatreEarning;
      if (time >= commercial) {
        temp = time - commercial;
        totalEarnings[2] = temp * commercialParkEarning;
      }
    }
  }

  let max = Math.max(...totalEarnings);
  profit += max;
  let index = totalEarnings.indexOf(max);
  result[index] += 1;
  return profit + profitMax(time - timeUnit[index]);
}

let result = [0, 0, 0];
const given = 8;
const maxEarnings = profitMax(given);

console.log(`T : ${result[1]} P:${result[0]} C:${result[2]},${maxEarnings}`);
