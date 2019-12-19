function fuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}

function totalFuelRequired(masses) {
  return masses.map(fuelRequired).reduce(function(acc, fuelMass) {
    return acc + fuelMass;
  }, 0);
}

module.exports = {
  fuelRequired,
  totalFuelRequired
};
