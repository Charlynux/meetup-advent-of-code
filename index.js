const fs = require("fs");
const {
  totalFuelRequired,
  totalCorrectedFuelRequired
} = require("./fuelRequired");

function parseInput(content) {
  return content.split("\n").map(x => parseInt(x, 10));
}

fs.readFile("input", "utf-8", function(err, content) {
  console.log(totalFuelRequired(parseInput(content)));
  console.log(totalCorrectedFuelRequired(parseInput(content)));
});
