import React from "react";
import { Route } from "react-router-dom";

function Shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let randomNumber = parseInt(Math.random() * 100) % array.length;
    let tmpElement = array[i];
    array[i] = array[randomNumber];
    array[randomNumber] = tmpElement;
  }
  return array;
}

function TerrainToColor(terrain) {
  switch (terrain) {
    case "Hills":
      return "Sienna";
    case "Forest":
      return "ForestGreen";
    case "Desert":
      return "SandyBrown";
    case "Mountains":
      return "DimGrey";
    case "Pasture":
      return "LawnGreen";
    case "Fields":
      return "GoldenRod";
    default:
      break;
  }
}

function AssignNumbers(terrainArray, numberArray) {
  let index = terrainArray.findIndex(element => element === "Desert");
  numberArray[numberArray.length] = numberArray[index];
  numberArray[index] = " ";
  return numberArray;
}

function AreNeighbours(firstCoordinates, secondCoordinates) {
  // if they have one coordinate identical(at the same index), a second one decremented by one
  // and the third incremented by one, they are neighbours

  let excludedIndex = -1;
  firstCoordinates.forEach(element => {
    if (secondCoordinates.includes(element)) {
      excludedIndex = firstCoordinates.IndexOf(e => e === element);
    }
  });
  if (excludedIndex === -1) return false;

  let tempDifferences = [];
  for (let i = 0; i < 3; i++) {
    if (i === excludedIndex) {
      i++;
      continue;
    }
    tempDifferences.push(firstCoordinates[i] - secondCoordinates[i]);
  }
  if (tempDifferences.includes(-1) && tempDifferences.includes(1)) return true;

  return false;
}

function FindRoadNeighbour(fieldCoordinates, roadCoordinates) {
  let neighbourCoordinates = [];
  for (let i = 0; i < 3; i++) {
    neighbourCoordinates[i] = fieldCoordinates[i] + roadCoordinates;
  }
  return neighbourCoordinates;
}

function FindCrossroadNeighbours(fieldCoordinates, crossroadCoordinates) {
  let fixedIndex = -1;
  let neighbourCoordinates = [[], []];
  crossroadCoordinates.forEach(element => {
    if (Math.abs(element) === 1) {
      fixedIndex = crossroadCoordinates.IndexOf(e => e === element);
    }
  });
  if (fixedIndex === -1) return null;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; i++) {
      neighbourCoordinates[i][j] =
        fieldCoordinates[j] + crossroadCoordinates[j];
    }
  }
  let toAdd = 1;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; i++) {
      if (j !== fixedIndex) {
        neighbourCoordinates[i][j] += toAdd;
        toAdd *= -1;
      }
    }
    toAdd *= -1;
  }

  return neighbourCoordinates;
}

export const utils = {
  Shuffle,
  TerrainToColor,
  AssignNumbers,
  AreNeighbours,
  FindRoadNeighbour,
  FindCrossroadNeighbours
};
