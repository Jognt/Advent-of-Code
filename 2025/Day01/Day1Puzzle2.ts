import { readFileSync } from "fs";
import { fileURLToPath, URL } from "node:url";

const list = readFileSync(
  fileURLToPath(new URL("Input02.txt", import.meta.url)),
  {
    encoding: "utf8",
  }
)
  .trim()
  .split("\r\n");

const dial = {
  position: 50,
  amountOfZero: 0,
  turnRight(val: number) {
    for (let i = 0; i < val; i++) {
      if (this.position === 99) {
        this.position = 0;
      } else this.position++;
      if (this.position === 0) this.amountOfZero++;
    }
  },
  turnLeft(val: number) {
    for (let i = 0; i < val; i++) {
      if (this.position === 0) {
        this.position = 99;
      } else this.position--;
      if (this.position === 0) this.amountOfZero++;
    }
  },
  move(val: string) {
    if (val.toUpperCase().startsWith("R"))
      this.turnRight(parseInt(val.slice(1), 10));
    if (val.toUpperCase().startsWith("L"))
      this.turnLeft(parseInt(val.slice(1), 10));
    return this.position;
  },
};

list.forEach((element) => {
  dial.move(element);
});

console.log("result", dial.amountOfZero);
