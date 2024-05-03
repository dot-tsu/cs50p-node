import { strictEqual } from "node:assert";
import { isValid } from "./plates.mjs";
import { test } from "node:test";

test("Vanity plates may contain a maximum of 6 characters and a minimum of 2 characters", (t) => {
  const validTests = ["AS", "AB49", "CI4950"];
  const invalidTests = ["A", "ABCDEFG", "CI495012"];

  for (const validTest of validTests) {
    strictEqual(isValid(validTest), true);
  }

  for (const invalidTest of invalidTests) {
    strictEqual(isValid(invalidTest), false);
  }
});

test("Numbers cannot be used in the middle of a plate; they must come at the end", (t) => {
  const validTests = ["AB49", "CI4950"];
  const invalidTests = ["A4B9", "CI49A50"];

  for (const validTest of validTests) {
    strictEqual(isValid(validTest), true);
  }

  for (const invalidTest of invalidTests) {
    strictEqual(isValid(invalidTest), false);
  }
});

test("The first number used cannot be a '0'", (t) => {
  const validTests = ["AB49", "CI4950"];
  const invalidTests = ["AB09", "CI0950"];

  for (const validTest of validTests) {
    strictEqual(isValid(validTest), true);
  }

  for (const invalidTest of invalidTests) {
    strictEqual(isValid(invalidTest), false);
  }
});

test("No periods, spaces, or punctuation marks are allowed", (t) => {
  const validTests = ["AB49", "CI4950"];
  const invalidTests = ["AB.49", "CI 4950", "AB,49"];

  for (const validTest of validTests) {
    strictEqual(isValid(validTest), true);
  }

  for (const invalidTest of invalidTests) {
    strictEqual(isValid(invalidTest), false);
  }
});