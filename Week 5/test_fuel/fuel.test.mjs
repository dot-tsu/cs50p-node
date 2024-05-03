import { strictEqual } from "node:assert";
import { convert, gauge } from "./fuel.mjs";
import { describe, it } from "node:test";

describe("convert", () => {
  it("Should not allow negative input", () => {
    strictEqual(convert("-1/1"), undefined);
    strictEqual(convert("1/-1"), undefined);
  });
  it("Numerator should not be greater than denominator", () => {
    strictEqual(convert("2/1"), undefined);
    strictEqual(convert("4/3"), undefined);
  });
  it("Denominator sould not be 0", () => {
    strictEqual(convert("1/0"), undefined);
  });
  it("Input of 1/2 should return 50 ", () => {
    strictEqual(convert("1/2"), 50);
  });
  it("Input of 0/1 should return 0 ", () => {
    strictEqual(convert("0/1"), 0);
  });
  it("Input of 6/10 should return 60 ", () => {
    strictEqual(convert("6/10"), 60);
  });
});

describe("gauge", () => {
  it("Input of less or equal 1 should return E", () => {
    strictEqual(gauge("0.5"), "E");
    strictEqual(gauge("1"), "E");
  });
  it("Input greater or equal 99 should return F", () => {
    strictEqual(gauge("99"), "F");
    strictEqual(gauge("99.5"), "F");
  });
  it("Input number should return number%", () => {
    strictEqual(gauge("10"), "10%");
    strictEqual(gauge("90"), "90%");
  });
});
