import { strictEqual, assert } from "node:assert";
import { test } from "node:test";
import { Jar, ValueError } from "./jar.mjs";

test("Jar should initialize with a valid capacity", (t) => {
  const jar = new Jar(5);
  strictEqual(jar.capacity, 5);
  strictEqual(jar.size, 0);
});

test("Jar should throw ValueError for invalid capacity", () => {
  assert.throws(() => {
    new Jar(-1);
  }, ValueError);
  assert.throws(() => {
    new Jar("invalid");
  }, ValueError);
});

test("Jar should deposit and withdraw cookies correctly", (t) => {
  const jar = new Jar(5);
  jar.deposit(3);
  strictEqual(jar.size, 3);
  jar.withdraw(2);
  strictEqual(jar.size, 1);
});

test("Jar should throw ValueError when depositing exceeds capacity", () => {
  const jar = new Jar(5);
  assert.throws(() => {
    jar.deposit(6);
  }, ValueError);
});

test("Jar should throw ValueError when withdrawing more than available", () => {
  const jar = new Jar(5);
  assert.throws(() => {
    jar.withdraw(1);
  }, ValueError);
});

test("Jar should return correct string representation", (t) => {
  const jar = new Jar(5);
  jar.deposit(3);
  strictEqual(jar.toString(), "🍪🍪🍪");
});
