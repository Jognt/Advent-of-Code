import { readFileSync } from "fs";
import { fileURLToPath, URL } from "node:url";

export const hasEqualHalves = (input: string) => {
  if (isOddNumber(input.length)) return;
  return input.startsWith(input.slice(input.length / 2));
};

export const isOddNumber = (input: number) => {
  return Math.abs(input % 2) === 1;
};

export const isEvenNumber = (input: number) => {
  return !isOddNumber(input);
};

export const hasEqualParts = (input: string) => {
  if (hasEqualHalves(input)) return true;
};

export const getDivisibleFactors = (input: string, maxFactor = 10) => {
  const divisibleBy = [];
  for (let i = 2; i <= maxFactor && i <= input.length; i++) { // todo, test if input.length/2 is quicker
    if (Number.isInteger((input.length / i) % 1)) divisibleBy.push(i);
  }
  return divisibleBy;
};

export const hasEqualPartsByDivisible = (input: string, factor: number) => {
  const part = input.substring(0, input.length / factor);
  const repeatedPart = part.repeat(factor);
  return repeatedPart === input;
};

export const initDay2 = () => {
  const filePath = fileURLToPath(new URL("./input.txt", import.meta.url));
  const data = readFileSync(filePath, { encoding: "utf8" });
  return data.split(",");
};
