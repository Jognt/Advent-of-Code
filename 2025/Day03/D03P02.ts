import { type Battery, type BatteryBank, initDay3 } from "./utils.ts";

const debug = true;

// const input = initDay3();
const input = ["812311111111119"];

const processBattery = (battery: Battery) => {
  let workingIndexStart = 0;
  let workingIndexEnd = battery.length;
  let workingBattery = "";

  // Create the next working battery string
  const createNextWorkingBattery = (
    battery: Battery,
    workingIndexStart: number,
    workingIndexEnd: number
  ) => battery.substring(workingIndexStart, workingIndexEnd);

  const getNextBestBattery = (workingBattery: Battery) =>
    workingBattery.split("").toSorted().reverse()[0];

  const getNextBestBatteryIndex = (
    battery: Battery,
    workingIndex: number
  ) => {};

  if (debug) {
    console.log(
      "[createNextWorkingBattery]",
      { battery, workingIndexStart, workingIndexEnd },
      "Return value:",
      createNextWorkingBattery(battery, workingIndexStart, workingIndexEnd),
      "\n"
    );
    console.log("[getNextBestBattery]", getNextBestBattery(workingBattery));
  }
};

input.forEach((battery) => {
  processBattery(battery);
});
