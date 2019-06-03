const fieldNumbers = [
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12
];

const fieldTerrains = [
  "Hills",
  "Hills",
  "Hills",
  "Mountains",
  "Mountains",
  "Mountains",
  "Pasture",
  "Pasture",
  "Pasture",
  "Pasture",
  "Fields",
  "Fields",
  "Fields",
  "Fields",
  "Forest",
  "Forest",
  "Forest",
  "Forest",
  "Desert"
];

const diceRolls = [1, 2, 3, 4, 5, 6];

const players = ["Red", "Blue", "Green", "Yellow"];

let tmpCrossroads = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 6; j++) {
    tmpCrossroads[i].push("white");
  }
}
const crossroads = tmpCrossroads;

export const consts = {
  fieldNumbers,
  fieldTerrains,
  diceRolls,
  players,
  crossroads
};
