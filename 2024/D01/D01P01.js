import { readFileSync } from "fs";

const input = getData();

const trimmedDataPairs = trimDataPairs(input);

const { listOne, listTwo } = filterInputIntoLists(trimmedDataPairs);

export const sortedListOne = sortListNumerically(listOne);
export const sortedListTwo = sortListNumerically(listTwo);

const distances = getDistances(sortedListOne, sortedListTwo);
const totalDistance = getTotalDistance(distances);

console.log("Total distance:", totalDistance);

function getData() {
  return readFileSync("D01P01-input.txt", { encoding: "utf8" });
}

function trimDataPairs(input) {
  if (!input) throw new Error("Invalid input");
  return input.trim().split(/\r?\n|\r\n/);
}

function filterInputIntoLists(inputPairs) {
  if (!inputPairs) throw new Error("Invalid input");

  const listOne = [];
  const listTwo = [];
  for (let i = 0, n = inputPairs.length; i < n; i += 1) {
    const inputPair = inputPairs[i];
    const splitPair = inputPair.split("   ");
    listOne.push(splitPair[0]);
    listTwo.push(splitPair[1]);
  }
  return { listOne, listTwo };
}

function sortListNumerically(list) {
  return list.sort((a, b) => a - b);
}

function getDistances(a, b) {
  if (sortedListOne.length !== sortedListTwo.length)
    throw new Error("List length mismatch");

  const distances = [];

  for (let i = 0, n = sortedListOne.length; i < n; i += 1) {
    const one = sortedListOne[i];
    const two = sortedListTwo[i];
    distances.push(getDistance(one, two));
  }
  return distances;

  function getDistance(a, b) {
    return Math.abs(a - b);
  }
}

function getTotalDistance(distances) {
  let total = 0;
  for (let i = 0, n = distances.length; i < n; i += 1) {
    total += distances[i];
  }
  return total;
}
