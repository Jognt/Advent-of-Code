/*
 * input.txt contains ID ranges [range start]-[range end].
 * Given the ID ranges in input.txt, find all ID's that are a sequence of digits repeated twice.
 */

import { hasEqualHalves, initDay2 } from "./utils.ts";

const input = initDay2();

// Get the IDs
const getInvalidIds = (range: string): number[] => {
  const idRange = range.split("-");
  const rangeStart = parseInt(idRange[0]);
  const rangeEnd = parseInt(idRange[1]);
  const invalidIdsFound = [];

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (hasEqualHalves(i.toString()) === true) invalidIdsFound.push(i);
  }

  return invalidIdsFound;
};
const invalidIds = input.flatMap(getInvalidIds);
console.log("\nInvalid IDs:", invalidIds);

// Add them up
let combinedInvalidIds = 0;
invalidIds.forEach((id) => {
  combinedInvalidIds += id;
});
console.log("\nInvalid IDs combined equals:", combinedInvalidIds);
