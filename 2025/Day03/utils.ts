import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";

export const initDay3 = () => {
  const filePath = "input3.txt";
  const fileURL = fileURLToPath(new URL(filePath, import.meta.url));
  const fileStream = readFileSync(fileURL, { encoding: "utf8" });
  return fileStream
    .split("\r\n")
    .filter((battery) => battery !== "") as unknown as Battery[];
};

export type Battery = string;

export type BatteryBank = {
  battery: Battery;
  maxJoltage: string;
};
