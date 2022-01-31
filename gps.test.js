const distanceFunc = require('./gps');

const gps = ["49.90855", "-97.157385"];

test('Distance between current location and GPS Coordinates should be 7.52KM', () => {
  expect(distanceFunc(gps)).toBe(7.52);
});