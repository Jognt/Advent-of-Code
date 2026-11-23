import { sortedListOne, sortedListTwo } from "./D01P01.js";

const sortedSetOne = new Set(sortedListOne);
const sortedSetTwo = new Set(sortedListTwo);
const setIntersection = sortedSetOne.intersection(sortedSetTwo);

const similarityScore = getSimilarityScoreFor();
console.log("Similarityscore: ", similarityScore);

function getSimilarityScoreFor(list, value) {
  let score = 0;
  setIntersection.forEach((element) => {
    const occurences = countOccurence(sortedListTwo, element);
    score += element * occurences;
  });

  return score;
}

function filterUniqueKeySet(list) {
  const res = new Set();
}

function countOccurence(list, value) {
  const occurences = list.filter((x) => x === value);
  const amount = occurences.length;
  return amount;
}
