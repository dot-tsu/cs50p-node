import test from "node:test";
import { strictEqual } from "node:assert";
import { convert } from "./working.mjs";

test("Should convert valid format", () => {
  strictEqual(convert("9:00 AM to 5:00 PM"), "09:00 to 17:00");
  strictEqual(convert("5 PM to 9 AM"), "17:00 to 09:00");
  strictEqual(convert("11:30 PM to 2:00 AM"), "23:30 to 02:00");
});

test("Should throw null on invalid format", () => {
  strictEqual(convert("9 AM - 5 PM"), null);
});

test("Should throw null on invalid time", () => {
  strictEqual(convert("12:60 AM to 5:00 PM"), null);
});
