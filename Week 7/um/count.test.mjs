import test from "node:test";
import { strictEqual } from "node:assert";
import { count } from "./um.mjs";

test("Should count single occurrences", () => {
  strictEqual(count("hello, um, world"), 1);
  strictEqual(count("um, hello, world"), 1);
  strictEqual(count("hello, world, um"), 1);
});

test("Should count multiple occurrences", () => {
  strictEqual(count("um, um, um"), 3);
  strictEqual(count("um, hello, um, world"), 2);
  strictEqual(count("um, thanks, um..."), 2);
});

test("Should count case insensitive", () => {
  strictEqual(count("UM, hello, Um"), 2);
  strictEqual(count("uM, hello, UM"), 2);
  strictEqual(count("um, hello, uM"), 2);
});

test("Should not count substrings", () => {
  strictEqual(count("yummy"), 0);
  strictEqual(count("humus"), 0);
  strictEqual(count("fuming"), 0);
});
