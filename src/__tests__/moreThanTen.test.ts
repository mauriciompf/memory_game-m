import { describe, expect, it } from "vitest";
import moreThanTen from "../ts/utils/moreThanTen";

describe("moreThanTen", () => {
  it("should be add a zero before unit value", () =>
    expect(moreThanTen(9)).toBe("09"));
});
