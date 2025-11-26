import { describe, expect, it } from "vitest";
import { addTwoNumbers } from "./utils.ts";

describe("add two numbers", () => {
    it("should sum its inputs", () => {
        expect(addTwoNumbers(10, 31)).toBeCloseTo(41);
    });
});
