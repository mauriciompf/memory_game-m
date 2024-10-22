import { describe, expect, it } from "vitest";
import resetArrays from "../ts/utils/resetArrays";

describe("resetArrays", () => {
  it("should be empty array", () => {
    const arrays = [[1, 2, 3]];
    const result = resetArrays(...arrays);
    expect(result[0]).toHaveLength(0);
  });
});
