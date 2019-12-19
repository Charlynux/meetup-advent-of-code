function fuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}

function recur(acc, mass) {
  const fuelMass = fuelRequired(mass);

  return fuelMass <= 0 ? acc : recur(acc + fuelMass, fuelMass);
}

function correctedFuelRequired(mass) {
  return recur(0, mass);
}

function totalFuelRequired(masses) {
  return masses.map(fuelRequired).reduce(function(acc, fuelMass) {
    return acc + fuelMass;
  }, 0);
}
function totalCorrectedFuelRequired(masses) {
  return masses.map(correctedFuelRequired).reduce(function(acc, fuelMass) {
    return acc + fuelMass;
  }, 0);
}

module.exports = {
  fuelRequired,
  correctedFuelRequired,
  totalFuelRequired,
  totalCorrectedFuelRequired
};
