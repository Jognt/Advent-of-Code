import { type BatteryBank, initDay3 } from "./utils.ts";

const input = initDay3();

// get maximum joltage per bank
const batteryBank: BatteryBank[] = input.map((battery) => {
  const bestBattery = battery
    .substring(0, battery.length - 1)
    .split("")
    .toSorted()
    .reverse()[0];
  const bestBatteryIndex = battery.indexOf(bestBattery);
  const nextBestBattery = battery
    .substring(bestBatteryIndex + 1)
    .split("")
    .toSorted()
    .reverse()[0];

  return { battery, maxJoltage: bestBattery.concat(nextBestBattery) };
});

const getMaxBankJoltage = (banks: BatteryBank[]) => {
  let cijfer = 0;
  banks.forEach((bank) => {
    cijfer += parseInt(bank.maxJoltage);
  });
  return cijfer;
};

console.log("Max joltage:", getMaxBankJoltage(batteryBank));
