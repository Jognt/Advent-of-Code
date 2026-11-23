import {
  getDivisibleFactors,
  hasEqualPartsByDivisible,
  initDay2,
} from "./utils.ts";

const input = initDay2();

// Get the IDs
const getInvalidIdsByDivisible = (range: string): number[] => {
  const idRange = range.split("-");
  const rangeStart = parseInt(idRange[0]);
  const rangeEnd = parseInt(idRange[1]);
  const invalidIdsFound: number[] = [];

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i.toString().length === 1) continue;
    const divisibleFactors = getDivisibleFactors(i.toString());

    const confirmedFactor = divisibleFactors.find((factor) => {
      return hasEqualPartsByDivisible(i.toString(), factor);
    });

    if (confirmedFactor !== undefined) invalidIdsFound.push(i);
  }

  return invalidIdsFound;
};

const invalidIdsByDivisble = input.flatMap(getInvalidIdsByDivisible);
console.log("\nInvalid IDs by divisible", invalidIdsByDivisble);

// Add them up
let combinedInvalidIdsByDivisible = 0;
invalidIdsByDivisble.forEach((id) => {
  combinedInvalidIdsByDivisible += id;
});
console.log(
  "\nInvalid IDs by divisible combined equals:",
  combinedInvalidIdsByDivisible
);
