import { expect, test } from "bun:test";
const add = (a: number, b: number) => a + b;
test("add", () => { expect(add(1, 2)).toBe(3); });
