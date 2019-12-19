const { fuelRequired, totalFuelRequired } = require("./fuelRequired");

test("fuelRequired1", () => {
  expect(fuelRequired(12)).toBe(2);
});
test("fuelRequired2", () => {
  expect(fuelRequired(14)).toBe(2);
});
test("fuelRequired3", () => {
  expect(fuelRequired(1969)).toBe(654);
});
test("fuelRequired4", () => {
  expect(fuelRequired(100756)).toBe(33583);
});

test("totalFuelRequired", () => {
  expect(totalFuelRequired([100756, 1969, 14, 12])).toBe(34241);
});
