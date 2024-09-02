import { Versions } from "../index";

describe("Versions", () => {
    it("should return 1 if version1 is greater than version2", () => {
        expect(Versions("1.2.3", "1.2.2")).toBe(1);
        expect(Versions("1.2.3-alpha", "1.2.2")).toBe(1);
        expect(Versions("1.2.3-alpha", "1.2.3-beta")).toBe(1);
    });

    it("should return -1 if version1 is less than version2", () => {
        expect(Versions("1.2.2", "1.2.3")).toBe(-1);
        expect(Versions("1.2.2", "1.2.3-alpha")).toBe(-1);
        expect(Versions("1.2.3-beta", "1.2.3-alpha")).toBe(-1);
    });

    it("should return 0 if version1 is equal to version2", () => {
        expect(Versions("1.2.3", "1.2.3")).toBe(0);
        expect(Versions("1.2.3-alpha", "1.2.3-alpha")).toBe(0);
    });

    it("should handle cases where version1 has a tag and version2 does not", () => {
        expect(Versions("1.2.3-alpha", "1.2.3")).toBe(-1);
    });

    it("should handle cases where version2 has a tag and version1 does not", () => {
        expect(Versions("1.2.3", "1.2.3-alpha")).toBe(1);
    });

    it("should compare tags as numbers if possible", () => {
        expect(Versions("1.2.3-1", "1.2.3-2")).toBe(-1);
        expect(Versions("1.2.3-10", "1.2.3-2")).toBe(1);
        expect(Versions("1.2.3-a1", "1.2.3-a2")).toBe(-1); // assuming tags are parsed as numbers
        expect(Versions("1.2.3-a10", "1.2.3-a2")).toBe(1); // assuming tags are parsed as numbers
    });

    it("should compare different length version numbers correctly", () => {
        expect(Versions("1.2", "1.2.3")).toBe(-1);
        expect(Versions("1.2.3", "1.2")).toBe(1);
        expect(Versions("1", "1.2.3")).toBe(-1);
        expect(Versions("1.2.3.4", "1.2.3")).toBe(1); // assuming only first three parts are considered
    });
});
