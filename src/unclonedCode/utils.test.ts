//TODO: use a much much simpler example
import { describe, it, expect, vi } from "vitest";
import { collect } from "./utils";

describe("collect", () => {
    it("should return an array with the correct number of elements", () => {
        const num = 5;
        const result = collect(num, () => "item");
        expect(result).toHaveLength(num);
    });

    it("should call the creatorFn exactly numElements times", () => {
        const creatorMock = vi.fn();
        collect(3, creatorMock);
        expect(creatorMock).toHaveBeenCalledTimes(3);
    });

    it("should pass the correct index to the creatorFn", () => {
        const indices: number[] = [];
        collect(4, (index) => {
            indices.push(index);
            return index;
        });
        expect(indices).toEqual([0, 1, 2, 3]);
    });

    it("should collect the returned values from creatorFn", () => {
        const num = 3;
        const result = collect(num, (i) => `Value ${i}`);
        expect(result).toEqual(["Value 0", "Value 1", "Value 2"]);
    });

    it("should handle zero elements correctly", () => {
        const creatorMock = vi.fn();
        const result = collect(0, creatorMock);
        expect(result).toHaveLength(0);
        expect(creatorMock).not.toHaveBeenCalled();
    });
});
