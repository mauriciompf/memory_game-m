import { describe, expect, it } from "vitest";
import shuffle from "../ts/utils/shuffle";

const originalArray = [1, 2, 3, 4, 5, 6];
const shuffledArray = shuffle([...originalArray]);

describe("shuffle", () => {
  it("should contain the same elements as the original", () => {
    expect(shuffledArray).toHaveLength(originalArray.length);
  });

  it("should shuffle an array of numbers and change the order", () => {
    expect(shuffledArray).not.toEqual(originalArray);
  });

  it("should not lose or duplicate elements during shuffle", () => {
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });
});
