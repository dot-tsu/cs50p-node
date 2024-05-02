const { shorten } = require("./twttr.cjs");

describe("shorten", () => {
  test("should remove vowels from a string", () => {
    expect(shorten("hello")).toBe("hll");
    expect(shorten("world")).toBe("wrld");
    expect(shorten("JavaScript")).toBe("JvScrpt");
  });

  test("should handle empty string", () => {
    expect(shorten("")).toBe("");
  });

  test("should handle string without vowels", () => {
    expect(shorten("rhythm")).toBe("rhythm");
  });
});
