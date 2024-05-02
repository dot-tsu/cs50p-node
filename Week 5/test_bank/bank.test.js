const { value } = require("./bank");

describe("value", () => {
  test('returns 0 for greetings starting with "hello"', () => {
    expect(value("hello")).toBe(0);
    expect(value("Hello")).toBe(0);
    expect(value("HELLO")).toBe(0);
  });

  test('returns 20 for greetings starting with "h" but not "hello"', () => {
    expect(value("hi")).toBe(20);
    expect(value("Hi")).toBe(20);
    expect(value("HI")).toBe(20);
    expect(value("hey")).toBe(20);
  });

  test('returns 100 for greetings not starting with "h"', () => {
    expect(value("goodbye")).toBe(100);
    expect(value("Goodbye")).toBe(100);
    expect(value("GOODBYE")).toBe(100);
  });
});
