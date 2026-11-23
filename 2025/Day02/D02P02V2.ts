import { getDivisibleFactors, initDay2 } from "./utils.ts";

const input = initDay2();

const getInvalidIdsByMappedOccurence = (
  range: string,
  option: string
): number[] => {
  const [rangeStrStart, rangeStrEnd] = range.split("-");
  const rangeStart = parseInt(rangeStrStart);
  const rangeEnd = parseInt(rangeStrEnd);
  const invalidIdsFound: number[] = [];

  if (option !== "A" && option !== "B")
    throw new Error(`Invalid value for option: "${option}"`);

  // option A, by divisibleFactor. Quicker?
  if (option === "A") {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const numberCount = [];
      const iString = i.toString();
      const divisibleFactors = getDivisibleFactors(iString);
      const set = new Set(Array.from(iString));
    }
  }

  // option B, skip divisibleFactor. Quicker?
  if (option === "B") {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      // console.log("Parsing value", i);
      const iString = i.toString();
      const set = new Set(Array.from(iString));
      // console.log(set);
      const numberCount: number[] = [];
      set.forEach((value) => {
        const valueMatches = (iString.match(new RegExp(value, "g")) || [])
          .length;
        numberCount.push(valueMatches);

        // console.log({
        //   matching: value,
        //   iString,
        //   matches: valueMatches,
        // });
      });
      console.log("occurences", new Set(numberCount).size);
      // console.log("\n");
    }
  }

  return invalidIdsFound;
};

console.time("Alternate");
getInvalidIdsByMappedOccurence("123123122-123123124", "B");
console.timeEnd("Alternate");
