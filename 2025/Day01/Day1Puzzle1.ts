import { readFileSync } from "fs";
import { fileURLToPath, URL } from "node:url";

const readFile = (filename: string) =>
  readFileSync(filename, { encoding: "utf8" });
const inputToList = (input: string, filter: string) =>
  input.trim().split(filter);

const filePath = fileURLToPath(new URL("Input01.txt", import.meta.url));
const input = readFile(filePath);
const list = inputToList(input, "\r\n");

const dial = {
  position: 50,
  amountOfZero: 0,
  checkDial() {
    if (this.position === 0 || this.position.toString().endsWith("00")) {
      this.amountOfZero++;
    }
  },
  right(val: number) {
    this.position += val;
  },
  left(val: number) {
    this.position -= val;
  },
  move(val: string) {
    if (val.startsWith("R")) this.right(parseInt(val.slice(1), 10));
    if (val.startsWith("L")) this.left(parseInt(val.slice(1), 10));
  },
};

list.forEach((element) => {
  const oldPos = dial.position;
  dial.move(element);
  dial.checkDial();
});

console.log("Dial amount of zero'd:", dial.amountOfZero);
